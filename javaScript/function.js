//named function 

function add (a,b)
{
    let sum=a+b;

    return sum;
}

console.log(add(2,3));

//anonymous function 

const multyply =function(a,b)
{
    return a*b;
}

console.log(multyply(2,3));

setTimeout(function(){
    console.log("this runs after 2 sec");
},2000);