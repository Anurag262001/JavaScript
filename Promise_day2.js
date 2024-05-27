//promise is used to handle async method sync
//takes callback func (resolve and reject)  .then is directly connected to resolve .then also take callback func
//resolve basically use to pass the value to then "see pro3 example"
//three stage 1: pending 2:fullfilled 3:rejected
let pro1 = new Promise((res,rej)=>{
    //all async task;
    setTimeout(()=>{
        console.log("async task compeleted");
        res();
    },2000);
 })
 pro1.then(()=>{
    console.log("promise consumed");
 })

//without putting into any variable
new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("async task 2 compeleted");
        res();
    },4000)
}).then(()=>{
    console.log("done")
}) 

//getting the data from resolve and use that data in then
 const pro3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({a:"anurag",b:"sharma",c:"23"});
    },3000)
})
pro3.then((data)=>{
    console.log(data);
}) 

//resolve and reject working 
new Promise((res,rej)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            res({a:"one",b:"two"});
        }else{
            rej("Error in the code");
        }
    }, 2000);
}).then((data)=>{
    console.log(data);
    return data.a;
}).catch((error)=>{
    console.log(error);
    console.log("error");
}).then((name)=>{
    console.log(name);
}).finally(()=>{
    console.log("it will always work");
})