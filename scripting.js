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
let unique;

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
    unique = new Set([]);
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
    mean = Math.round((sum / arr.length) * 100) / 100;
    console.log("Mean = ", mean);

    arr.sort((a , b) => a-b);
    const middle = Math.floor(arr.length / 2);
    if (arr.length % 2 == 0)
    {
        median = (arr[middle - 1] + arr[middle]) / 2;
    }
    else {
        median = arr[middle];
    }
    console.log("Median = ", median);

    getMode(arr);
    console.log("Mode = ", mode);


    for (let i = 0; i < arr.length; i++)
    {
        unique.add(arr[i]);
    }

    console.log("Unique = ", unique);

    createTable();
}

function getMode(array)
{
    let object = {};

    for (let i = 0; i < array.length; i++)
    {
        if (object[array[i]])
        {
            object[array[i]] += 1;
        }
        else {
            object[array[i]] = 1;
        }
    }

    let biggestValue = -1;
    let biggestValuesKey = -1;

    Object.keys(object).forEach(key => {
        let value = object[key];
        if (value > biggestValue)
        {
            biggestValue = value;
            biggestValuesKey = key;
        }
    })

    mode = biggestValuesKey;
}

for (let i = 0; i < arr.length; i++)
{
    unique.add(arr[i]);
}

function createTable()
{
    var table = document.getElementById("table");
    for (let i = 0; i < unique.length; i++)
    {
        var row = table.insertRow(0);
        row.insertCell(i);
    }
}