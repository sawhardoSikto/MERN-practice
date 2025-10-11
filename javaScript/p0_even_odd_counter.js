function evenOddCounter(nums)
{
    let evenCount=0;
    let oddCount=0;
    for(let i=0 ;i<nums.length;i++)
    {
        if (nums[i]%2==0)
        {
            evenCount++;

        }
        else
        {
            oddCount++
        }
    }
    console.log(`the evenCount : ${evenCount}`)
    console.log(`the oddCount : ${oddCount}`)

}
numbers=[1,2,3,4,2,2,4,5,6,7,4,3,2,2,4,6,8,999,8,8,77,98,776,655,3];
evenOddCounter(numbers)