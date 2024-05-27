const data = document.getElementById('head');
const data2 = document.getElementsByClassName('heading'); //gives html collection
console.log(data);
console.log(data2);
//styling 
data.style.color="yellow";
data.style.backgroundColor="black";
data.style.marginTop = "50px";

//textcontent
console.log(data.innerHTML); //display every thing used in the element  
console.log(data.textContent);//dipslay all text which is there in element
console.log(data.innerText);//dipplay only what is shwoing on the screen if display none that that part will not be visible

