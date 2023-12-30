const input = document.getElementById("input-text");
const button = document.getElementById("check-btn");
const result = document.getElementById("output");

button.addEventListener("click", displayResult);
function displayResult(){
    const inputValue = input.value;
    if(inputValue === ""){
        alert("PLease type in a word to check!");
    }

}