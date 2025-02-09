function product() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var prod = numA * numB;
    alert('The product of a and b is ' + prod);
}

function power() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var exp = Math.pow(numA, numB);
    alert('a raised to b is ' + exp);
}

function remainder() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var mod = numA % numB;
    alert('The remainder is ' + mod);
}

function compare() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var comp = Number(numA) == Number(numB);
    alert('Is a equal to b? Answer: ' + comp);
}

function logicalOperation() {
    var numA = Number(document.getElementById("numA").value);
    var numB = Number(document.getElementById("numB").value);

    var bothPositive = (numA > 0 && numB > 0);  
    var atLeastOnePositive = (numA > 0 || numB > 0);
    var notEqual = !(numA == numB);  

    alert(`Both numbers are positive: ${bothPositive} \nAt least one is positive: ${atLeastOnePositive} \nNumbers are NOT equal: ${notEqual}`);
}

function message() {
    alert("Let's go!");
}


