const parent = document.querySelector('.cont');
const parent2 = document.getElementById('cont');
console.log(parent) //get the parent element and inside the divs
console.log(parent.children); //we get html collection
console.log(parent.children[2]); //we get the div of the 2nd indexed child
console.log(parent.children[2].innerText); //we get the inner html content of the  

/* 
//same thing is for the getElementById
console.log(parent2) //get the parent element and inside the divs
console.log(parent2.children); //we get html collection
console.log(parent2.children[2]); //we get the div of the 2nd indexed child
console.log(parent2.children[2].innerText); //we get the inner html content of the  
 */



const day = document.querySelector('.day');
console.log(day); //div of day 1st
console.log(day.parentElement);//get the parent element
console.log(day.nextElementSibling);//tue























