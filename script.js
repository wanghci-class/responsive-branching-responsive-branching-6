document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const osDefault = document.querySelector('.main-nav li:nth-child(1) a');
  const darkMode = document.querySelector('.main-nav li:nth-child(2) a');
  const lightMode = document.querySelector('.main-nav li:nth-child(3) a');

  osDefault.addEventListener("click", (ev) => {
    ev.preventDefault();
    body.classList.remove("dark", "light");
  });

  darkMode.addEventListener("click", (ev) => {
    ev.preventDefault();
    body.classList.remove("light");
    body.classList.add("dark");
  });

  lightMode.addEventListener("click", (ev) => {
    ev.preventDefault();
    body.classList.remove("dark");
    body.classList.add("light");
    console.log("asdfasf");
  });
});
