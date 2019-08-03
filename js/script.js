const box = document.getElementById('result');


function toDisplay(x) {
    box.value += x;
    if(x === 'C') {
        box.value = '';
    }
}

function backspace() {
    const val = box.value;
    const len = val.length - 1;
    box.value = val.substring(0, len);
}