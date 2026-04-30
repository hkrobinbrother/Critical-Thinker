// const createCounter = ()=>{
//     let count = 0;

//     return (amount) =>{
//         count = count + amount;
//         return count;
//     }
// }

// const counter = createCounter()

// console.log(counter(2))
// console.log(counter(5))

class Counter{
    constructor(count){
        this.count = count;
    }

    add(amount){
        this.count = this.count + amount;
    }
    print(){
        console.log(this.count)
    }
}

const Counter1 = new Counter(0)

Counter1.add(5)
Counter1.add(5)

Counter1.print()

const Counter2 = new Counter(10)

Counter2.add(10)
Counter2.add(10)

Counter2.print()