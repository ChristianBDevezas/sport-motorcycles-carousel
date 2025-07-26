import { productsDatabase } from "./product-database.js";
import { createElements } from "./create-elements.js";
import { moveToLastPosition } from "./create-elements.js";

let slider = document.getElementById("slider");
let nextBtn = document.getElementById("slide-right");
let prevBtn = document.getElementById("slide-left");

let cardHorizontalPosition = 0;
for(let productItem of productsDatabase) {
  let cardElement = createElements(productItem);
  
  cardElement.style.left = `${cardHorizontalPosition}px`

  slider.appendChild(cardElement);
  cardHorizontalPosition += 210;
}

//thumbnails generated after for of loop
let thumbnails = document.querySelectorAll(".thumbnail");

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

setInterval(() => {
  for(let tagIndex of slider.children) {
    // let tag = slider.children[tagIndex];

    // console.log(tag, tag instanceof HTMLElement === false);
    // if(tag instanceof HTMLElement === false) continue;

    // moveToLastPosition(slider, tag);
    moveToLastPosition(slider, tagIndex);
  }
}, 2000);

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

// Pause the slide on hover
thumbnails.forEach((thumb) => {
  thumb.addEventListener("mouseover", () => {
    clearInterval(play);
  });

  thumb.addEventListener("mouseout", () => {
    play = setInterval(autoPlay, 10);
  });
});