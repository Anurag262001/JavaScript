const arr  = [1,2,3,4,5];
const arr2 = ["one","two","three","four","five"];
//merge :- concat() returns a new array
const resarr = arr.concat(arr2);
console.log(resarr);
//mergse :- spread operator returns individual element not the array;
console.log(...arr,...arr2);
//converting nested array into single array
const arr3 = [1,2,3,3,["anurag","sharma",[10,11,12,13]]];
console.log(arr3.flat(Infinity));
//convert into array
const val = "anurag";
console.log(Array.from(val));