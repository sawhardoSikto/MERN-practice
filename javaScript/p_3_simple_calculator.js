function doOperation( num1,  num2 ,  operator)
{
    let sum,sub,multuply,division;
    if (operator === "+")
    {
        sum = num1 + num2;
        return sum;
    }
    else if (operator === "-")
    {

        sub = num1 - num2;
        return sub;
    }
    else if (operator === "*")
    {
        multuply = num1 * num2;
        return multuply;

    }
    else if (operator === "/")
    {
        if(num2===0)
        {
            return "syntax Error,Undefined";
        }
        else{
            division = num1/num2;
            return division;
        }

    }
    else {
        return "does not support other operator";
    }


}

console.log(doOperation(1,0,"-"));