const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(new URLSearchParams(window.location.search));
  placeForResults.append(`${name} : ${value}`);
  placeForResults.append(document.createElement("br"));
});
