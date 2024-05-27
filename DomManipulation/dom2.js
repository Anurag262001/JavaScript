//query selector
const a = document.querySelector('h1'); //return very first h1 
console.log(a);
const b = document.querySelector('.heading'); //selecting from the className
console.log(b);
const c = document.querySelector('#head'); //selecting from the id
console.log(c);
const d = document.querySelector('input[type="password"]'); //selecting the input field
console.log(d);

//turn the text of the 1st element of list orange
const day = document.querySelector('li');
day.style.color = "orange";
//chnage the text to sunday
day.innerText = "sunday";

//query selector all
//query selector all returns in the form of nodelist which seems similar to the array but not exactly similar to the array also we got foreach function to iterate
//chnage the color of wednesday
const change = document.querySelectorAll('li');
console.log(change);
change[2].style.color="blue";
//iterate the list and print on console;
const iterate = document.querySelectorAll('li');
iterate.forEach((data)=>{
    console.log(data);
})
//change the background color of li items at same time (use queryselector) 
const changebgcolor = document.querySelectorAll('li');
changebgcolor.forEach((data)=>{
    console.log(data.innerText); //got all the values
    data.style.backgroundColor="cyan";
})
