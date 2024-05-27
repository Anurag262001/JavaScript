fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).catch((error)=>{
    console.log(error);
}).then((data)=>{
    console.log(data);
})