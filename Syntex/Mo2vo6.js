const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];


const lookUptable = postsArray.reduce((table,post)=> {
    table[post.id] = post


    return table
},{})

console.log(lookUptable)

// !const findOne = postsArray.find((post)=> post.id === "p-104")

// console.log(findOne)
// const post = lookUptable["p-101"]

for(let post in lookUptable){
    console.log(lookUptable[post])
}

// console.log(post)