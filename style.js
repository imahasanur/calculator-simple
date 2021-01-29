var buttons = document.getElementById('number-buttons');
buttons.addEventListener('click',handleButtons);

function handleButtons(event){
    // console.log(event.target.innerText);
    let screenNum = document.getElementById('result-screen');
    var character = event.target.innerText;
    if (character === "="){
        let characters = document.getElementById('result-screen').value;
        var numOne, numTwo, sign;
        numOne = numTwo = sign = "";
        var firstNum = true;
        for(let i = 0; i < characters.length; i++){
            let charValue = characters.charCodeAt(i);
            if ( charValue >= 48 && charValue <= 57 && firstNum){
                numOne = numOne +characters[i]
            }
            else if(characters[i] === "*" || characters[i] === "+" || characters[i] === "-" || characters[i] === "/" || characters[i] === "%"){
                sign = sign + characters[i];
                firstNum = false;
            }
            else if(charValue >= 48 && charValue <= 57 && !(firstNum)){
                numTwo = numTwo + characters[i];
            }
        }
        console.log(numOne, numTwo, sign);
        let value = resultCalculation(numOne, numTwo, sign);
        screenNum.value = value;
    }
    else if(character === "Ac"){
        screenNum.value = "";
    }
    else if(event.target.classList.contains('fa-backspace')){
        let characters = screenNum.value;
        let newCharacters = characters.slice(0,(characters.length -1));
        screenNum.value = newCharacters;

    }
    else{
        screenNum.value = screenNum.value + character;
        console.log(character, event.target);
    }
}

function resultCalculation(numOne, numTwo, sign){
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo)
    if (numOne == 0 && numTwo == 0){
        return "0";
    }
    if (sign === "+"){
        return (numOne + numTwo);
    }
    else if(sign === "-"){
        return (numOne - numTwo);
    }
    else if(sign === "*"){
        return (numTwo * numOne);
    }
    else if(sign === "/"){

        return (numOne / numTwo);
    }
    else if(sign === "%"){
        return (numOne % numTwo);
    }
}