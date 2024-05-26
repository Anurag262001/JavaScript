function greet1(){
    console.log("anurag");
}
function greet2(g1){
    console.log("good morning");
    g1();
}
greet2(greet1);


const fun1 = ()=>{
    console.log("good afternoon");
}
const fun2 = (callfun1)=>{
    console.log("hello anurag")
    callfun1();
}
fun2(fun1);
