'use strict';

let arrow = document.querySelector('.arrow');

let move = (num) => {
  if (num < 90 || num === 360) {
    arrow.style.transform = 'translate(99px, 99px) rotate(-'+ num + 'deg)';
  } else if (num >= 90) {
    arrow.style.transform = 'translate(99px, 102px) rotate(-'+ num + 'deg)';
  }
  console.log(arrow);
}

console.log(move(45));