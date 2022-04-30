let value = 0;
let countEl = document.getElementById("count-el");
let decreaseEl = document.getElementById("count-el")
let resetEl = document.getElementById("count-el");

function count() {
    value += 1;
    countEl.textContent = value;
}

function decrease() {
    if (value > 0) {
        value -= 1;
        countEl.textContent = value;
    }
    else {
        return;
    }
}

function reset() {
    resetEl.textContent = 0;
    value = 0;
}