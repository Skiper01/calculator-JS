let value = "";
let result;
let operators = ['+', '-', '*', '/'];

document.getElementById('btn1').onclick = function() {
    value += 1;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn2').onclick = function() {
    value += 2;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn3').onclick = function() {
    value += 3;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn4').onclick = function() {
    value += 4;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn5').onclick = function() {
    value += 5;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn6').onclick = function() {
    value += 6;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn7').onclick = function() {
    value += 7;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn8').onclick = function() {
    value += 8;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn9').onclick = function() {
    value += 9;
    document.getElementById('values').textContent = value;
}
document.getElementById('btn0').onclick = function() {
    value += 0;
    document.getElementById('values').textContent = value;
}
document.getElementById('btnClear').onclick = function(){
    value = "";
    document.getElementById('values').textContent = value;
}

document.getElementById('btnAdd').onclick = function() {
    value += "+";
    document.getElementById('values').textContent = value;
}
document.getElementById('btnSub').onclick = function() {
    value += "-";
    document.getElementById('values').textContent = value;
}
document.getElementById('btnMul').onclick = function() {
    value += "*";
    document.getElementById('values').textContent = value;
}
document.getElementById('btnDiv').onclick = function() {
    value += "/";
    document.getElementById('values').textContent = value;
}
document.getElementById('btnEqual').onclick = function() {
    try {
        result = eval(value);
        if (result === Infinity || result === -Infinity) {
            document.getElementById('values').textContent = "Nie dziel przez zero cwelu pierdolony";
        } else if (isNaN(result)) {
            document.getElementById('values').textContent = "Nie dziel przez zero cwelu pierdolony";
        } else {
            document.getElementById('values').textContent = result;
        }
    } catch (e) {
        document.getElementById('values').textContent = "Nie dziel przez zero cwelu pierdolony";
    }
}
