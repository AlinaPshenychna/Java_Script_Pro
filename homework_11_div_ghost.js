// Є текстове поле на сторінці. Під час фокусування на цьому
// полі збоку з'являється <div>. При пропажі фокусу
// - <div> так само пропадає

let divGhost = document.createElement("div");
let box = document.querySelector(".box");
box.appendChild(divGhost);
let input = document.querySelector("input");

input.addEventListener("focus", (event) => {
  divGhost.innerHTML = "Hello new div";
  divGhost.style.background = "red";
  divGhost.style.position = " absolute";
  divGhost.style.left = "185px";
  divGhost.style.top = "10px";
});
input.addEventListener("blur", (event) => {
  divGhost.style.display = "none";
});
