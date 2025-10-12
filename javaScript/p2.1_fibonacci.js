function fibonacci(n)
{
    if (n<=1)
    {
        return n;
    }
    else
    {   let current;
        let p1=0;
        let p2 = 1;
        for (let i = 2; i <= n; i++)
        {
            current =p1 + p2;
            p1 = p2;
            p2 = current;
        }
        return current;
    }
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));