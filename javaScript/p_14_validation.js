function isValid(input)
{
    if(input.length !==7 || input[0]!== '#')
    {
        console.log(false);
        return;
    }
    let code = input.slice(1);

    for (let ch of code)
    {
        if (ch >= '0' && ch <='9' || ch >='A' && ch<='F' || ch >= 'a'  && ch<= 'f')
        {
            continue
        }
        else{
            console.log(false);
            return;
        }
    }
    console.log(true)
}

isValid("#1234bA")