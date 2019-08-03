const box = document.getElementById('result');


function toDisplay(x) {
    box.value += x;
    if(x === 'C') {
        box.value = '';
    }
}