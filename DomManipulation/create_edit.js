const fun = (lang)=>{
    const li = document.createElement('li');
    li.innerHTML=`${lang}`;
    document.querySelector('.language').appendChild(li);
}
fun("python");
fun("html");  


