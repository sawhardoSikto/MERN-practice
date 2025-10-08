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


// immediately invoked functin expressions (IIFE)

(function ()
{
    console.log("this is runs immediately");
})();


// generator function

function* generatorNumber ()
{
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}
const gen= generatorNumber();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// recursive function 

function countDown (n)
{
    if (n<=0) return;
    console.log(n);
    countDown(n-1);
}
countDown(10);

function factorial (n)
{
    if (n===0) return 1;
    return n* factorial(n-1)
}
console.log(factorial(5))

function fibonacci (n)
{
    if (n <= 1) {
        return n;
    }
    // Recursive step: sum of the two preceding numbers
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i=0 ; i<10;i++)
{
    console.log(fibonacci(i))
}