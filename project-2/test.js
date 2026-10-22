const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;


incrementBtn.addEventListener('click', () => {

    count++;

    counterDisplay.textContent = count;
});


decrementBtn.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});