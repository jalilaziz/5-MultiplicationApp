function result() {
    let inputNumber = document.getElementById('inputNumber'); 
    let numSelect = document.getElementById('select'); 
    let result = document.getElementById('result'); 
    let calculationResult = parseInt(inputNumber.value) * parseInt(numSelect.value);

    result.innerHTML = "Result: " + inputNumber.value + " * " + numSelect.value + " = " + calculationResult;

    let resultText = "Result: " + inputNumber.value + " * " + numSelect.value + " = " + calculationResult;

    document.getElementById("history").innerHTML += "<br>" + resultText;
    localStorage.setItem("history", document.getElementById("history").innerHTML);
}

window.onload = function () {
    let savedHistory = localStorage.getItem("history");
    if (savedHistory) {
        document.getElementById("history").innerHTML = savedHistory;
    }
};

function clearHistory() {
    document.getElementById("history").innerHTML = "";
    localStorage.removeItem("calculationHistory");
}

// **************************************

// function result() {
//     let inpuNummber = document.getElementById('inputNumber'); 
//     let numSelect = document.getElementById('select'); 
//     let result = document.getElementById('result'); 
//     let calculationResult = parseInt(inpuNummber.value) * parseInt(numSelect.value);
     
// result.innerHTML = "RESULT: " + calculationResult;
// document.getElementById('result').innerHTML = "Result: " + inpuNummber.value + " * " + numSelect.value + " = " + calculationResult;
// document.getElementById("history").innerHTML += "<br>" + document.getElementById('result').innerHTML;
// }

// ***************************************

// let input = document.getElementById("inputNumber"); 
// let numSelect = document.getElementById("select");
// let result = document.getElementById("result");
// let history = document.getElementById("history"); 
// let showBtn = document.getElementById("btn"); 

// let obj={}

// if (localStorage.length>0) {
//     let localStorageData = JSON.parse(localStorage.getItem("data"))
//     obj={...localStorageData}

//     for (let n in obj) {
//         history.innerHTML += `<br>${n} = ${obj[n]}` 
//     }
// }

// showBtn.addEventListener("click", () => {
//     if (input.value !== "" && numSelect.value !== "") {
//         let r = +input.value * +numSelect.value
//         result.innerHTML = r
//         obj[`${input.value} * ${numSelect.value}`]=r
//         localStorage.setItem("data", JSON.stringify(obj))
//         history.innerHTML += `<br>${input.value} * ${numSelect.value} = ${r}`
        
//     } else {
//         alert("please enter a number")
//     }
// })