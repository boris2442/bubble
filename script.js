//initialisation des variable && constantes

const counterDisplay=document.querySelector("h3");

let counter =0;
const bubble=document.createElement("span");

bubble.classList.add("bubble");

document.body.appendChild(bubble);

console.log(Math.random()*1000)
// let size= Math.random()*200 +100 + "px";
let size=`${Math.random()*200 +100}px `
console.log(size)

bubble.style.width=size
bubble.style.height=size
 