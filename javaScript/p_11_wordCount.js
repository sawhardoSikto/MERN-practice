function wordCount(input)
{
    let count=0;
     const parts = input.trim().toLowerCase();
     for ( let part of parts)
     {
        count++;
     }
     console.log(count);
}
wordCount("alice");