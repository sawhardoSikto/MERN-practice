function primeNum(input)
{
    if (input<2)
    {
        console.log(`${num} is not a prime number.`);
        return;
    }
    else{
        for(let i = 2; i<=Math.sqrt(input); i++)
        {
            if (input%i===0)
            {
                console.log(`${input} is not a prime number.`);
                return;
            }
            
        }
        
    }
    console.log(`${input} is a prime number.`);
                return;
}
primeNum(121);