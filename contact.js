const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*start js for form copied and not edited yet*/
const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(new URLSearchParams(window.location.search));
  placeForResults.append(`${name} : ${value}`);
  placeForResults.append(document.createElement("br"));
});
