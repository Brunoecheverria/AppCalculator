alert("Welcome to the calculator app, I hope it is useful to you, thank you very much for using it!")

function addition(){
    const form = document.getElementById("form");
    let number1 = form["number1"];
    let number2 = form["number2"];
    let result = parseInt(number1.value) + parseInt(number2.value);
    document.getElementById("result").innerHTML = "The result of the addition is: " + result;
}

function subtraction(){
    const form = document.getElementById("form");
    let number1 = form["number1"];
    let number2 = form["number2"];
    let result2 = number1.value - number2.value;
    document.getElementById("result2").innerHTML = "The result of the subtracion is: " + result2;
}

function multiplication(){
    const form = document.getElementById("form");
    let number1 = form["number1"];
    let number2 = form["number2"];
    let result3 = number1.value * number2.value;
    document.getElementById("result3").innerHTML = "The result of the multiplication is: " + result3;
}

function division(){
    const form = document.getElementById("form");
    let number1 = form["number1"];
    let number2 = form["number2"];
    let result4 = number1.value / number2.value;
    document.getElementById("result4").innerHTML = "The result of the division is: " + result4;
}

function resetResults() {

    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("result4").innerHTML = "";

    const resetButton = document.getElementById("reset");
    resetButton.innerHTML = "";

    form["number1"].value = "";
    form["number2"].value = "";
    
}

resetButton.onclick = function() {
    resetResults();
};
