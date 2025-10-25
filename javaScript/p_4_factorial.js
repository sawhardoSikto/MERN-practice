function factorial(n)
{
    let facto=1;
    if (n===1 || n===0){
        return 1;
    }
    for (let i =1 ; i<=n; i++ )
    {
        facto = facto*i;
        
    }
    return facto;
}
console.log(factorial(4));