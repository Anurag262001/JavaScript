//syntax
/* 
1st way :-    setTimeout(function,milisec,params)
*/
setTimeout(()=>{
    console.log("hi");
},3000);

/* 
2nd way :-  setTimeout(function_name,milisec,params)
*/
setTimeout(greeting,5000);
function greeting(){
    console.log("hello anurag");
}

/* 
3rd way :- using argument
*/
setTimeout(func,2000,"hey");
function func(x){
    console.log(`${x}anurag`)
} 