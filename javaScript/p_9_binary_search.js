function bubbleSort(arr) {
    let n = arr.length;
    let newArr = arr.slice(); // original array copy
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    return newArr;
}


function binarySearch(input)
{
    let parts = input.split("\n")
    let n = parseInt(parts[0]);
    let m = parts[1].split(" ").map(Number);
    let p = parseInt(parts[2]);

    let low = 0;
    let high = n-1;
    let found = false;

    let sortedArray = bubbleSort(m);

    while (low<=high){
        let mid = Math.floor((low + high)/2);

        if (sortedArray[mid] === p)
        {
            let originalIndex = m.indexOf(p);
            console.log(originalIndex);
            found = true;
            break;
        }
        else if (sortedArray[mid]<p)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    if (!found)
    {
        console.log("Element not found");
    }
    

}

binarySearch("6\n10 20 5 40 60 7\n40");