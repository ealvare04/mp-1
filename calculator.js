function checkNegative(output) {

    let out = output.innerHTML

    console.log("CHECKING OUTPUT: " + out);

    // if output is a number (aka not set to "" by clear())
    if (!isNaN(out)) {
        // parse the NON-EMPTY string as a number
        out = Number(out);

        if (out < 0){
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }
}

function doAddition() {
    let output = document.getElementById("output");
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let result = Number(first) + Number(second);

    // set output
    output.innerHTML = String(result);

    checkNegative(output);
}

function doSubtraction(){
    let output = document.getElementById("output");
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let result = Number(first) - Number(second);

    // set output
    output.innerHTML = String(result);

    checkNegative(output);
}

function doMultiplication(){
    let output = document.getElementById('output');
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let result = Number(first) * Number(second);
    // set output
    output.innerHTML = String(result);

    checkNegative(output);
}

function doDivision() {
    let output = document.getElementById("output");
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let result = Number(first) / Number(second);

    // set output
    output.innerHTML = String(result);

    checkNegative(output);
}

function doPower() {
    let output = document.getElementById("output");
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let result = 1;

    for (let i=0; i<second; i++){
        result = result * first
    }

    // set output
    output.innerHTML = String(result);

    checkNegative(output);
}

function doClear() {
    console.log("CLEARING")

    let output = document.getElementById("output");
    let first = document.getElementById("first");
    let second = document.getElementById("second");

    // reset values and output
    output.innerHTML = "";
    first.value="";
    second.value="";

    checkNegative(output);

    output.style.color = "black";
}
