const eInput = document.querySelector(".email");
const form = document.querySelector(".main-form");
let text = document.querySelector(".text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (eInput.value === "") {
    text.innerText = "Whoops! It looks like you forgot to add your email";
    eInput.classList.add("borderRed");
  } else if (!eInput.value.match(pattern)) {
    text.innerText = "Please provide a valid email address";
    eInput.classList.add("borderRed");
  } else {
    text.innerText = "";
    eInput.classList.remove("borderRed");
  }
});
