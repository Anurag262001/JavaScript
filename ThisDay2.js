const obj = {
    name:"anurag",
    age:"23",
    other:function(){
        console.log(`hello ${this.name}`); //this refer to the current context
    }
}
console.log(obj.other());
obj.name = "anvi";
console.log(obj.other());

function fun(){
    let name = "anurag";
    console.log(this.name);  //undefined
}
fun();

const func = ()=>{
    let name = "anurag";
    console.log(this.name) //undefined
}
func();
