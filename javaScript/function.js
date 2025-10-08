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

// arrow function

const sum = (a,b) => a+b;

console.log(sum(2,3));

const s= (a,b)=>{
    return a+b;
}
console.log(s(1,2));