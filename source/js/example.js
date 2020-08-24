var BeforeButton = document.querySelector(".example__button--before");
var AfterButton = document.querySelector(".example__button--after");
var BeforePhoto = document.querySelector(".example__photo--before");
var AfterPhoto = document.querySelector(".example__photo--after");
var ExampleBar = document.querySelector(".example__bar");
var Example = document.querySelector(".example");



BeforeButton.addEventListener("click",function() {
  BeforePhoto.classList.remove("example__photo--before-clip");
  AfterPhoto.classList.remove("example__photo--after-clip");
  AfterPhoto.classList.add("example__photo--no");
  BeforePhoto.classList.remove("example__photo--no");
  ExampleBar.classList.remove("example__bar--after");
  ExampleBar.classList.add("example__bar--before");
  Example.classList.remove("example--after");
  Example.classList.add("example--before");
});

AfterButton.addEventListener("click",function() {
  BeforePhoto.classList.remove("example__photo--before-clip");
  AfterPhoto.classList.remove("example__photo--after-clip");
  BeforePhoto.classList.add("example__photo--no");
  AfterPhoto.classList.remove("example__photo--no");
  ExampleBar.classList.remove("example__bar--before");
  ExampleBar.classList.add("example__bar--after");
  Example.classList.remove("example--before");
  Example.classList.add("example--after");
});
