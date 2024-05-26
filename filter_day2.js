//returns an array which satisfy the condition;
const fil = [1,2,3,4,5,6];
const num = fil.filter((data)=>{
   return data>3;
});
console.log(num);

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Ethan", age: 40 },
    { name: "John", age: 22 },
    { name: "Emma", age: 31 },
    { name: "Michael", age: 27 },
    { name: "Sophia", age: 29 },
    { name: "James", age: 34 }
  ];
const data = people.filter((items)=>{
    return items.age>30;
}) 
console.log(data);