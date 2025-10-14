function getGCD(input)
{
    let parts =input.split(" ").map(Number);
    let a = parts[0];
    let b = parts[1];

    let gcd =1;
    let smaller;
    if (a<b)
    {
        smaller=a;

    }else{
        smaller = b;
    }

    for (let i = 1; i<=smaller; i++)
    {
        if (a%i===0 && b%i===0)
        {
            gcd=i;
        }
    }
    return gcd;
}
console.log(getGCD("5 15"));