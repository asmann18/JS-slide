let back = document.querySelector(".back-btn");
let next = document.querySelector(".next-btn");
let screen = document.querySelector(".screen");

let pic1 = `<img src="./pic1.jpg" class="pic" alt="">`;
let pic2 = `<img src="./pic2.jpg" class="pic" alt="">`;
let pic3 = `<img src="./pic3.jpg" class="pic" alt="">`;
let array = [pic1, pic2, pic3];
var arrayIndex = 0;

back.addEventListener("click", () => {
  if (arrayIndex > 0) {
    arrayIndex = arrayIndex - 1;
    screen.innerHTML = array[arrayIndex];
  }
});
next.addEventListener("click", () => {
  if (arrayIndex < array.length - 1) {
    arrayIndex = arrayIndex + 1;
    screen.innerHTML = array[arrayIndex];
  }
});
