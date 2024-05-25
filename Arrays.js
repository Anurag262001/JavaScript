const arr = [1,2,3,4,"anurag"];
const arr2 = [10,11,12,13,14];
console.log(arr);
console.log(arr[2]);
//push
arr.push("sharma");
console.log(arr);
//pop
arr.pop();
console.log(arr);
//join :- it convert the array into string.
const joinres = arr.join();
console.log(joinres);
//slice :- it donot include the last range;
const sliceres = arr.slice(1,3);
console.log(sliceres);
console.log(arr);
//splice :- it also changes the orginal array original aray left with the elements with not included in the range, also it includes the last range;
const spliceres = arr.splice(1,3);
console.log(spliceres);
console.log(arr);

