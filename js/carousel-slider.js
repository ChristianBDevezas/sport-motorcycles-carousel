import { productsDatabase } from "./product-database.js";
import { createElements } from "./create-elements.js";
// import { moveToLastPosition } from "./create-elements.js";

const playStopBtn = document.getElementById("play-stop");
const engineSound = document.getElementById("engine-sound");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

for(const productItem of productsDatabase) {
  slider.appendChild(createElements(productItem));
}

//thumbnails generated after for of loop
const thumbnails = document.querySelectorAll(".thumbnail");

nextBtn.addEventListener("click", () => {
  let scrollAmount = 0;

  let slideTimer = setInterval(() => {
    slider.scrollLeft += 20;
    scrollAmount += 10;

    if(scrollAmount >= 100) {
      clearInterval(slideTimer);
    }
  }, 25);
});

// setInterval(() => {
//   for(const tagIndex of slider.children) {
//     // console.log(tag, tag instanceof HTMLElement === false);
//     // if(tag instanceof HTMLElement === false) continue;

//     moveToLastPosition(slider, tagIndex);
//   }
// }, 16700);

prevBtn.addEventListener("click", () => {
  let scrollAmount = 0;

  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 32;
    scrollAmount += 10;
    
    if(scrollAmount >= 100) {
      clearInterval(slideTimer);
    }
  }, 25);
});

// Auto Play
function autoPlay() {
  if(slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) - 1) {
    slider.scrollLeft = 0;
  }
  else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

// Play/Stop Button
playStopBtn.addEventListener("click", (e) => {
  const target = e.target;

  target.classList.toggle("change-btn-color");
  
  if(target.classList.contains("change-btn-color")) {
    target.innerText = "Play Slider";

    clearInterval(play);

    engineSound.pause();
  }
  else {
    target.innerText = "Stop Slider";

    play = setInterval(autoPlay, 10);
    
    engineSound.play();
    engineSound.currentTime = 0;
  }
});