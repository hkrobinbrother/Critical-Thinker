// console.time("Move7")

// for (let i = 0; i < 50; i++){
//     console.log(i)
// }



// console.timeEnd("Move7")


/***
 * order (n)
 * */


const firstArray = []
const SecondArray = []


for(let i = 0; i < 500 ; i++){
    if(i < 250){
        firstArray.push(i)
    }
    SecondArray.push(i)
}
console.log("firstArray",firstArray.length)
console.log("SecondArray",SecondArray.length)

// console.time("map1")
const firstArrayMap = firstArray.map((number)=>({userId: number}))
// console.timeEnd("map1")

// console.time("map2")
const secondArrayMap = SecondArray.map((number)=>({userId: number}))
// console.timeEnd("map2")

// console.time("find")
// const user = secondArrayMap.find((user)=> user.userId === 400)
// console.timeEnd("find")
console.time("find1")
const user = secondArrayMap[400]
console.timeEnd("find1")