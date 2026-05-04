// const towSum = (arr,target)=>{
//     const numMap = new Map()

//     for (let i = 0; i < arr.length; i++) {
//         const currentNum = arr[i];
//         const complement = target - currentNum;

//         if(numMap.has(complement)){
//             return[numMap.get(complement),i]

//         }
//         numMap.set(currentNum,i)
        
//     }
//     return undefined;
// }

// console.log(towSum([2,11,7,15],9))










const towSum = (arr,target)=>{
    const numMap = new Map()
    
    
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        const complement = target - currentNum;
        if(numMap.has(complement)){
            return [numMap.get(complement),i]
        }
        numMap.set(currentNum,i)
        
    }
    return undefined
}

console.log(towSum([2,3,6,8],5))