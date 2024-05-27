async function g1(){
    try{
        const bufferdata = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(bufferdata);
        const data = await bufferdata.json();
        console.log(data);
    }
    catch(error){
        console.log("error in fetching the API",error);
    }
}
g1();