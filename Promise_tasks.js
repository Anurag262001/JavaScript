//task1 come home
//task2 open the gate
//task3 cook food
//task4 open icongito mod
//task5 go to sleep
const pro = new Promise((resolve,reject)=>{
    return resolve("task1 come home");
})
const pro2 = pro.then((data)=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
        return resolve("task2 open the gate");
    })
})
const pro3 = pro2.then((data)=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
       return resolve("task3 cook food");
    })
})
const pro4 = pro3.then((data)=>{
    console.log("data");
    return new Promise((res,rej)=>{
        return res("task4 open incongito mod");
    })
})
const pro5 = pro4.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        return res("task5 go to sleep");
    })
})
const pro6 = pro5.then((data)=>{
    console.log(data);
})