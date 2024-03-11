(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".fa").classList.toggle("fa-moon");
    document.querySelector(".theme-btn .fa").classList.toggle("fa-sun");
  });
})();

const typed = new Typed(".text", {
  strings: [
    "Software Developer", 
    "Web Developer"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
