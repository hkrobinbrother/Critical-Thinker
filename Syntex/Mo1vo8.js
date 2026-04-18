//    const set = new Set()

//    set.add("apple")
//    set.add("banana")

//    console.log(set.size) // Output: 2

// const siam = {userName : "siam"}
// const any = {userName : "any"}

// const set = new Set()
// set.add(siam)
// set.add(any)
// set.add(any)
// console.log(set)


const arr = ["A","B","C","A"]

const set = new Set(arr)
// set.add("D")
// set.add("B")
const has = set.has("B")
const del = set.delete("C")
// const test = Array.from(set)
console.log(set)