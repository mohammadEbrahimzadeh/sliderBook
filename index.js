let pages = document.getElementsByClassName("page");
let pagesx = document.querySelectorAll(".page");
pagesx.forEach((item, index) => {
  if (index !== 0) {
    item.insertAdjacentHTML(
      "beforeend",
      `
                <div class="idProduct">c${index}</div>
            
                       `
    );
  }
});
// pages.foreach((index) => {
//   return console.log(index);
// });
// for (let index = 1; index <= 41; index++) {

//
// }

for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = pages.length - i;
  }
}

function flip() {
  const audio = document.getElementById("musicFlip");
  audio.play();

  if (this.pageNum % 2 === 0) {
    this.classList.remove("flipped");
    this.previousElementSibling.classList.remove("flipped");
  } else {
    this.classList.add("flipped");
    this.nextElementSibling.classList.add("flipped");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < pages.length; i++) {
    //Or var page = pages[i];
    pages[i].pageNum = i + 1;
    pages[i].onclick = flip;
    pages[i].addEventListener("mouseup", flip);
    pages[i].addEventListener("touchend", flip);
  }
});
