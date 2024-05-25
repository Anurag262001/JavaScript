//Object destructuring
const obj ={
    mon:"one",
    tue:"two",
    wed:"three"
}
const{mon,tue,wed} = obj;
console.log(mon);
console.log(tue);
console.log(wed);

//change the var name
const{mon: first , tue: sec , wed: third} =obj;
console.log(first);
console.log(sec);
console.log(third); 

