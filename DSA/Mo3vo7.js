class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if not empty 
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error("index out of bound")
            return undefined;
        }
        if (index === 0) {
            return this.prepend(value)
        }

        if (index === this.length) {
            return this.append(value)
        }

        const leadingNode = this._traverseToIndex(index - 1)
        const holdingNode = leadingNode.next;

        const newNode = new Node(value)

        leadingNode.next = newNode;
        newNode.next = holdingNode;
        this.length++;
    }

    remove() { }
    _traverseToIndex(index) {
        let count = 0;

        let currentNode = this.head;

        while (count != index) {
            currentNode = currentNode.next;
            count++;

        }
        return currentNode;
    }
    print() {
        const arr = []
        let currentNode = this.head;

        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr.join("->"), ("-> null"))
    }
}


const linkList = new LinkList()


// linkList.append(1)
// linkList.append(2)
// linkList.append(3)
linkList.append(1).append(2).append(3)
linkList.insert(2,200)
linkList.print(

)