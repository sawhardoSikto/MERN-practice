function palindrome(input)
{
    let N = parseInt(input);
    let rev = 0;
    let temp = N;
    while (N>0)
    {
        let dig = N % 10;
        rev = rev * 10 + dig;
        N = Math.floor(N / 10);


    }
    if (temp === rev)
    {
        console.log(`${temp} is a palindrome number`);
    }
    else
    {
         console.log(`${temp} is not a palindrome number`);
    }

}
palindrome(121);