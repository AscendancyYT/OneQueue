// Loading DOM Elements
let loader = document.querySelector(".loader");

window.onload = () => {
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
};
