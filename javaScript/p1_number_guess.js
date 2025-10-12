let secretNumber=9;
const chance =5;

let guess=[9,3,4,5,9];

for (let i=0;i<5;i++)
{
    let userGuess=guess[i];
    console.log(`your guess is ${userGuess}`);
    if (userGuess==secretNumber)
    {
        console.log(`the guess is correct ${userGuess}`);
        break;
    }
    else if (userGuess>secretNumber)
    {
        console.log(`the guess is bigger than the secret`);

    }
    else
    {
        console.log(`the guess is lower than the secret`)
    }
}