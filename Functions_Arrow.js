/* func 1 */
const fun1 = ()=>{
    console.log("hey");
}
fun1();

/*func 2 */
const fun2=(one,two)=>{
    console.log(one+two);
}
fun2(1,1);

/* func 3 */
const fun3 =()=>{
    return "hey";
}
console.log(fun3());

/* func 4 */
const fun4 = (yourname)=>{
    return `${yourname}`;
}
const naam = fun4("anurag");
console.log(naam);