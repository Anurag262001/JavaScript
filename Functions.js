/*            func  one                    */
function one(){
    console.log("hello");
}
one();

/*             func second                 */
function two(num1,num2){
    console.log(num1+num2);
}
two(1,1);

/*             func three                  */
function three(one,two){
    return one+two;
}
const addition = three(1,1);
console.log(addition);

/*              func four                  */
//Params with default value
function four(name="anurag"){
    return `your name is ${name}`;
}
const data = four();
console.log(data);

/*             func five                    */
const func = function greet(){
    console.log("hello good morning");
}
func();

/*              func six                     */
const func2 = function greet2(){
    return "hello mam";
}
console.log(func2());

/*              func seven                   */
const func3 = function greet3(){
    return "hello sir";
}
const save = func3();
console.log(save);

/*              func eight                   */
const func4 = function greet4(yourname){
    return `hello ${yourname}`;
}
const yourdata = func4("anurag");
console.log(yourdata);


