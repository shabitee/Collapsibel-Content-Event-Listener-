const button = document.querySelector("#button");
const closeUp = document.querySelector("#button2");
const text = document.querySelector("p");
button.addEventListener("click", () => {text.classList.remove("dynamic-content-text")});
closeUp.addEventListener("click", () => {text.classList.add("dynamic-content-text")});
