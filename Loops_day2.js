//Arrays specific Loop
/* for of loop */ //return the elements
/* object are not iterable using "for of" loop */
const arr = [1,2,3,4,5,6];
const name = "anurag";
const obj = {
    a:"one",
    b:"two",
    c:"three",
    d:"four"
}


for(const val of arr){
    console.log(val);
}
for(const val2 of name){
    console.log(val2);
}

/* maps */ //holds key value pairs
const map = new Map();
map.set("name","anurag");
map.set("lastname","sharma");
map.set("age","23");
map.set("email","mranuragsharma01@gmail.com");
map.set("birth","26thjan");
map.set("house","agra");
console.log(map);
for(const [key , value] of map){
    console.log(key, value);
}





/* for in loop */
//maps are not iterable for in loops
//print the index value
for(const data in arr){
    console.log(data);
}
for(const data in obj){
    console.log(data); 
}
//print the value and keys
for(const data in arr){
    console.log(`key is ${data} and the value is ${arr[data]}`);
}
for(const data in obj){
    console.log(`key is ${data} and the value is ${obj[data]}`); 
}


/* for each Loop */
//it takes callback function use only for arrays and arrays of object not an indivisual object it also has optional parameter of index and array
//it donot return anything
arr.forEach(function(data){
    console.log(data);
});

arr.forEach((data)=>{
    console.log(data);
})

arr.forEach(function(data,index,arrays){
    console.log(data,index,arrays);
});

const obj2 = [
{a:"one",b:"two",c:"three"},
{d:"four",e:"five",f:"six"},
{g:"seven",h:"eight",i:"nine"}
]

console.log(obj2);
console.log(obj2[0]);
console.log(obj2[0].c);
obj2.forEach((items)=>{
    console.log(items.f);
})
