var BeforeButton = document.querySelector(".example__button--before");
var AfterButton = document.querySelector(".example__button--after");
var BeforePhoto = document.querySelector(".example__photo--before");
var AfterPhoto = document.querySelector(".example__photo--after");



BeforeButton.addEventListener("click",function() {
  BeforePhoto.classList.remove("example__photo--before-clip");
  AfterPhoto.classList.remove("example__photo--after-clip");
  AfterPhoto.classList.add("example__photo--no");
  BeforePhoto.classList.remove("example__photo--no");
});

AfterButton.addEventListener("click",function() {
  BeforePhoto.classList.remove("example__photo--before-clip");
  AfterPhoto.classList.remove("example__photo--after-clip");
  BeforePhoto.classList.add("example__photo--no");
  AfterPhoto.classList.remove("example__photo--no");
});
