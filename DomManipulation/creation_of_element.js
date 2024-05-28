const div = document.createElement('div');
console.log(div);
div.id = "one";
div.className = "cn";
div.style.backgroundColor = "cyan";
div.innerText = "hello this is anurag";
document.body.appendChild(div); 

//or you can write like
const addtext = document.createTextNode("this is javascript");
div.appendChild(addtext);
 
