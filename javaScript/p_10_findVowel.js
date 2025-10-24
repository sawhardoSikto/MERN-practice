function checkVowel(input)
{
    const parts = input.trim().toLowerCase();
   
    let hasVowel =  false;
    for (let part of parts)
    {
        if (part == "a" || part == "e" || part == "i" || part == "o" || part == "u")
        {
            hasVowel = true;
            
            break;
        }
        
    }
    if (hasVowel)
    {
        console.log("The string contains a vowel.")
    }
    else
    {
        console.log("The string does not contain any vowel.")
    }
   
}
checkVowel("AEIOU");