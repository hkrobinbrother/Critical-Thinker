const Course1 ={name:"Level-1 web"};
const Course2 ="Level-2 next level"

const obj = {}

obj.nextLevel = {courseId : "Level-2"}
// obj[true] = {CourseId : "Level-1"}
// obj[Course1] = {CourseId : "Level-1"}

// console.log(obj)


const Course11 ={name:"Level-1 web"};
const Course22 ={name:"Level-2 next level"};


const map = new Map()
map.set(1,"programming")
map.set({name:"Level-1 web"},"the obj under the map")
map.set(Course22,"the course")
// console.log(map)
// map.forEach((value,key,)=>console.log("key:",key,"value:",value))
// map.forEach((value,key,)=>(key.name = "shoj shorol" + key.name))

for(let key of map.keys()){
    key.name = "shoj " + key.name
}

console.log(map)
