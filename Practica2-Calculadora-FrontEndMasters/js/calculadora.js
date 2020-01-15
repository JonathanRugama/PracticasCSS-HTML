let runningTotal=0;
let buffer = "0";
let previusOperator; 
const screen = document.querySelector(".pantalla");

document
.querySelector(".calc-botones").addEventListener("click", function(event) {
    
    buttonClick(event.target.innerText);
   
});

function buttonClick(value) {
    console.log(value);
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        
        handleNumber(value);
    }
    rerender();
}

function handleNumber (value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();
}

function handleSymbol (value) {
    switch (value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previusOperator = null;
            break;
        case '=':
            if (previusOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previusOperator = null;
            buffer = "" +runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length===1){
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}
function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previusOperator = value;
    buffer = "0";
}

function flushOperation (intBuffer) {
    if (previusOperator === "+") {
        runningTotal += intBuffer;
    } else if (previusOperator === "-"){
        runningTotal -= intBuffer;
    } else if (previusOperator === "x"){
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function rerender() {
    screen.innerText = buffer;
}