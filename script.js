const input = document.getElementById("input-text");
const button = document.getElementById("check-btn");
const result = document.getElementById("output");

button.addEventListener("click", displayResult);
function displayResult(){
    const inputValue = input.value;
    if(inputValue === ""){
        alert("PLease type in a word to check!");
    }else{
        palindromeCheck(inputValue);
    }

}

function palindromeCheck(str){
    const regx = /[^A-Za-z0-9]/g;
    const replaceReg = str.toUpperCase().replace(regx, "");
    const compare = replaceReg.split("").reverse().join("");

    if (compare === replaceReg){
        result.innerText = `${input.value} is a palindrome.`
    }else{
        result.innerText = `${input.value} is not a palindrome.`
    }
}