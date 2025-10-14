function tripletSum(input)
{
    let parts=input.split("\n");
    let n=parseInt(parts[0]);
    let arr=parts[1].split(" ").map(Number);
    let p=parseInt(parts[2]);

    for (let i = 0; i<n-2; i++)
    {
        for(let j = i+1; j<n-1; j++)
        {
            for (let k = j+1; k<n; k++)
            {
                if (arr[i] + arr[j] + arr[k] === p)
                {
                    console.log(arr[i],arr[j],arr[k]);
                }
            }
        }
    }

}

tripletSum("6\n12 3 4 1 6 9\n24");