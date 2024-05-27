//getElementbyClassName('');
//this return not the nodelist not the array this return the htmlcollection 
//we cannot use foreach method while with htmlcollection
const data = document.getElementsByClassName('cn');
const convert = Array.from(data);
console.log(convert);
convert.forEach((data)=>{
    const innerdata = data.innerHTML;
    console.log(innerdata);
    data.style.backgroundColor = "cyan";
})
//change the color of fri
data[4].style.color = "orange";