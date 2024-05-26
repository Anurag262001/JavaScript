//reduce convert an array into a single element
//syntax
const arr = [1,2,3];
const initail_value = 0;
const sum = arr.reduce((acc,currval)=>{
    console.log(`value of acc is ${acc} and value of currvalue ${currval}`)
   return acc+currval;
},0  /* inital value of acc */);
console.log(sum);