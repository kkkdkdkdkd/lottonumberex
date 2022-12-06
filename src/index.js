const buttonClick = document.getElementById("click");
const One = document.getElementById("one");
const Two = document.getElementById("two");
const Three = document.getElementById("three");
const Four = document.getElementById("four");
const Five = document.getElementById("five");
const Six = document.getElementById("six");
const Seven = document.getElementById("seven");

function getNumber() {
  One.innerText = Math.ceil(Math.random() * 40 + 1);
  Two.innerText = Math.ceil(Math.random() * 40 + 1);
  Three.innerText = Math.ceil(Math.random() * 40 + 1);
  Four.innerText = Math.ceil(Math.random() * 40 + 1);
  Five.innerText = Math.ceil(Math.random() * 40 + 1);
  Six.innerText = Math.ceil(Math.random() * 40 + 1);
  Seven.innerText = Math.ceil(Math.random() * 40 + 1);
}

buttonClick.addEventListener("click", getNumber);
