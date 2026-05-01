class Node {
    constructor(value) {

        this.value = value;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first ? this.value : undefined;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const nodeRemoveNode = this.first;

        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.length++;
        return nodeRemoveNode.value;
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    print() {
        const arr = [];

        let currentNode = this.first;
        while(currentNode){
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log("from -> " + arr.join("->") + "-> back")
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()