function sumOfArray(input)
{
    let parts = input.split("\n")
    let n = parseInt(parts[0]);
    let arr = parts[1].split(" ").map(Number);

    arr.sort((a,b) => a-b);
    let median;
    let count=0;

    if ( n%2 ===0)
    {
        median = (arr[(n/2)-1] + arr[n/2])/2;
    }else{
        median = arr[Math.floor(n/2)];
    }
    for ( let n of arr)
    {
        if (n<median)
            count+=n;
    }
    console.log(count)

}

sumOfArray("6\n30 10 5 40 60 15");