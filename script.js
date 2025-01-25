//initialisation des variable && constantes

const counterDisplay = document.querySelector("h3");

let counter = 0;

const bubleMaker = () => {
    const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  document.body.appendChild(bubble);

//   console.log(Math.random() * 100);
  // let size= Math.random()*200 +100 + "px";
  let size = `${Math.random() * 200 + 100}px `;
  // console.log(size)

  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.top = Math.random() * 100 +50+ "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove()
  });
};


setInterval(bubleMaker, 2000);
