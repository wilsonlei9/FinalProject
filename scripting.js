let doubles;
let triples;
let sum = 0;
let mean;
let median;
let mode;
let numDice;
let num1;
let num2;
let num3;
let numTimes;
let arr = [];

function one() 
{
    numDice = document.getElementById("1").value;
}
function two() 
{
    numDice = document.getElementById("2").value;
}
function three() 
{
    numDice = document.getElementById("3").value;
}

function setNum() 
{
    numTimes = document.getElementById("userInput").value;
    console.log(numTimes);
}

function rollDice() 
{
    sum = 0;
    arr = [];
    if (numDice == 1) 
    {
        for (let i = 0; i < numTimes; i++) 
        {
            num1 = Math.floor(Math.random() * 6 + 1);
            console.log(num1);
            arr.push(num1);
        }
    }
    if (numDice == 2) 
    {
        for (let i = 0; i < numTimes; i++) 
        {
            num1 = Math.floor(Math.random() * 6 + 1);
            num2 = Math.floor(Math.random() * 6 + 1);
            console.log(num1);
            console.log(num2);
            arr.push(num1);
            arr.push(num2);
        }
    }
    if (numDice == 3) 
    {
        for (let i = 0; i < numTimes; i++) 
        {
            num1 = Math.floor(Math.random() * 6 + 1);
            num2 = Math.floor(Math.random() * 6 + 1);
            num3 = Math.floor(Math.random() * 6 + 1);
            console.log(num1);
            console.log(num2);
            console.log(num3);
            arr.push(num1);
            arr.push(num2);
            arr.push(num3);
        }
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) 
    {
        sum += arr[i];
    }
    mean = Math.round(((sum / arr.length) * 100) / 100);
    median = 
    console.log(mean);
}