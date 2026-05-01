const dataCash = new Map();
const expensiveTask = (id) =>{
    console.log("ran the expensive task from :" , id)

    return{
        id:id, data: `some data for id: ${id}`,timeStamp: new Date().getTime() 
    }
}

const getData = (id) =>{
    if(dataCash.has(id)){
        return dataCash.get(id);
    }
    const data = expensiveTask(id);
    dataCash.set(id,data)
    return data;
}
console.log(dataCash)
console.log(getData(1234))
console.log(dataCash)