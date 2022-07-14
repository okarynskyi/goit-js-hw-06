const input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.innerHTML = event.target.value || 'Anonymous'
  });