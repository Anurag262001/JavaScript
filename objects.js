const obj = 
{
    a: "one",
    b: "two",
    b: "three",
    c: "four",
    d: "five",
    e: ["mon","tue","wed","thur","friday","sat"],
    "f": "six",
    fun: function(){
        console.log("hello there");
    },
    fun2: ()=>{
        console.log("arrow func in object");
    },
    fun3: ()=>{
        console.log(`I have ${obj.d} apple`);
    }
}
console.log(obj);
console.log(obj.a);
console.log(obj.e[3]);
console.log(obj["f"]);

//chnage the value of the object;
obj.b = "hello";
console.log(obj);
console.log(obj.b);
console.log(obj.fun()); //execute the function and give undefined
console.log(obj.fun2()) //execute the function and give the undefined
console.log(obj.fun3()); 
//lock the change value : on more futher change in the object; 
Object.freeze(obj);