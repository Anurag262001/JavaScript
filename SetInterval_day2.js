/* execute at regular interval of time */
/* 
setInterval(function,milisec,parameters)
*/
 setInterval(()=>{
    const date = new Date;
    const rec = date.toLocaleString();
    console.log(rec);
},2000); 