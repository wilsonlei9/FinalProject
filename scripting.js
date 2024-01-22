let doubles;
let triples;
let result;
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
let uniqueArray = [];
let frequency;
var table = "";

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
            console.log("num1 = " + num1);
            // arr.push(num1);
            result = num1;
            arr.push(result);
        }
    }
    if (numDice == 2) 
    {
        for (let i = 0; i < numTimes; i++) 
        {
            num1 = Math.floor(Math.random() * 6 + 1);
            num2 = Math.floor(Math.random() * 6 + 1);
            console.log("num1 = " + num1);
            console.log("num2 = " + num2);
            // arr.push(num1);
            // arr.push(num2);
            result = num1 + num2;
            arr.push(result);
        }
    }
    if (numDice == 3) 
    {
        for (let i = 0; i < numTimes; i++) 
        {
            num1 = Math.floor(Math.random() * 6 + 1);
            num2 = Math.floor(Math.random() * 6 + 1);
            num3 = Math.floor(Math.random() * 6 + 1);
            console.log("num1 = " + num1);
            console.log("num2 = " + num2);
            console.log("num3 = " + num3);
            // arr.push(num1);
            // arr.push(num2);
            // arr.push(num3);
            result = num1 + num2 + num3;
            arr.push(result);
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

    
    getUnique();
    createTable();
    table = "";
    console.log("Unique = ", uniqueArray);

    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < unique.length; i++)
        {
            if (arr[i] == unique[j])
            {
                frequency++;
            }
            table.rows[1].cells[1].innerHTML = frequency;
        }
    }
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


function getUnique()
{
    for (let i = 0; i < arr.length; i++)
    {
        unique.add(arr[i]);
    }
    uniqueArray = Array.from(unique);
}

function createTable()
{
    var col = 2;
    table += "<table>";
    table += "<tr><th>Result</th><th>Frequency</th></tr>"
    for (let r = 0; r < uniqueArray.length; r++)
    {
        table += "<tr>";
        for (let c = 0; c < col; c++)
        {
            table += "<td>" + "</td>"
        }
        table += "</tr>";
    }
    table += "</table>";
    console.log(table);
    document.getElementById("container").innerHTML = table;
}
