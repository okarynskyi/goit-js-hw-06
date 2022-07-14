const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const refCounter = document.querySelector("#value");
let counterValue = (refCounter.textContent = 0);

btnDecrement.addEventListener("click", event => {
    counterValue += Number(btnDecrement.textContent)
    refCounter.innerHTML = counterValue;
});

btnIncrement.addEventListener("click", event => {
    counterValue += Number(btnIncrement.textContent)
    refCounter.innerHTML = counterValue;
});