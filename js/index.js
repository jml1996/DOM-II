// Your code goes here


// I realize this is a bit of a mess, but it's late, and I was
// to maximize the variety of my event handlers rather than
// make them as consistent and neat as possible.

const navButtons = document.querySelectorAll(".nav-link");
const arrayOfNavButtons = Array.from(navButtons);
let originalFont = "";
arrayOfNavButtons.forEach((button) => button.addEventListener('mouseover', (event) => {
    button.style.fontFamily = "'Times New Roman', Times, serif";
}));
arrayOfNavButtons.forEach((button) => button.addEventListener('mouseout', (event) => {
        button.style.fontFamily = originalFont;
}));

const busImg = document.querySelector(".fun-bus-img");
let originalSize = busImg.style.width;

console.log(`og: ${originalSize}`);
// Bus Image
// (Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event)
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    busImg.style.transform = `scale(${scale})`;
  }
let scale = 1;
busImg.onwheel = zoom;

document.addEventListener('click', () => busImg.style.transform = `scale(${1})`);

const signMeUpBtns = document.querySelectorAll(".btn");
const arraySignMeUpBtns = Array.from(signMeUpBtns);

let originalBack = arraySignMeUpBtns[0].style.background;
let originalColor = arraySignMeUpBtns[0].style.color;
arraySignMeUpBtns.forEach((button) => button.setAttribute("tabindex", 0));
arraySignMeUpBtns.forEach((button) => button.addEventListener('focus', () => {
    button.style.background = 'red';
}));

document.addEventListener('keydown', () => arraySignMeUpBtns.forEach((button) => {
    button.style.background = 'yellow';
    button.style.color = 'black';
}));
document.addEventListener('keyup', () => arraySignMeUpBtns.forEach((button) => {
    button.style.background = originalBack;
    button.style.color = originalColor;
}));

const imgs = document.querySelectorAll("img");
const imgArray = Array.from(imgs);

var dragOrigin;
imgArray.forEach((img) => {
    img.addEventListener("dragstart", (event) => {
        dragOrigin = event.target;
    }, false);
    document.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    document.addEventListener("dragenter", function(event) {
        event.target.style.background = "purple";
    }, false);
    document.addEventListener("dragleave", function(event) {
        event.target.style.background = "";
    }, false);
    document.addEventListener("drop", (event) => {
        event.preventDefault();
        if(event.target.nodeName !== "IMG"){
            dragOrigin.parentNode.removeChild(dragOrigin);
            event.target.appendChild(dragOrigin);
            event.target.style.background = "";
        }
    }, false);
});
