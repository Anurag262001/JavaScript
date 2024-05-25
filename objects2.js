//nesting of the objects;
const obj = {
    a:"one",
    b:"two",
    c:{
        name:"anurag",
        lastname:"sharma"
    }
}
console.log(obj);
console.log(obj.a);
console.log(obj.c.name);

//merging of the objects 
//Object.assign
const obj1 = {
    a:"one",
    b:"two"
}
const obj2 = {
    1:"one",
    2:"two"
}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
//spread operator
const objres = {...obj1,...obj2};
console.log(objres);

//Arrays of the objects
const arrayobj = [{
    name:"anurag",
    age:"23"
},{
    name:"anvi",
    age:"22"
},{
    name:"rohit",
    age:23,
}]
console.log(arrayobj);
console.log(arrayobj[1]);
console.log(arrayobj[1].name);
console.log(arrayobj[1].age);

//get the Key :- we will get the keys of the object as an Array
console.log(Object.keys(obj1));
//get the values :-  we will get the values of the object as an Array
console.log(Object.values(obj1));