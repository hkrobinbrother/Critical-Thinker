//  const arr= [1,3,45,]

//  const hasEvenNum = arr.some((number)=> number % 2 === 0 )

//  console.log(hasEvenNum)


const currUserRole = ["seller", "editor" , "admin",]

const featureUserRole = ["admin ", "manager"]

const canAccess = currUserRole.some((role)=> featureUserRole.includes(role))

// console.log(canAccess)

// const arr = Array.from([1,3,4],(value, i) => value * value
//  )

// const arr = Array.from({length:3})
// console.log(arr)


const range = (start,stop, step)=>
    Array.from(
        {length: Math.ceil(stop - start) / step},
        (_,i)=> start + i + step
    )
 


console.log(range(0,11,2))

