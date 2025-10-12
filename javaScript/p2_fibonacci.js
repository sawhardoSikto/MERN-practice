function getFibonacciSeries (n)
{
    let series=[0,1];
    for (let i = 2; i<= n; i++)
    {
        series[i] = series[i-1] + series[i-2];
        
    }
    return series
}
console.log(getFibonacciSeries(5));



function findFibonacciIndex(n)
{
    const fibonacciSeries = getFibonacciSeries(n);
    return fibonacciSeries[n];
   
}

console.log(findFibonacciIndex(5));