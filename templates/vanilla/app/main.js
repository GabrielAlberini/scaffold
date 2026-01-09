document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#btn");
  const output = document.querySelector("#output");

  button.addEventListener("click", () => {
    output.textContent = "¡Funciona! 🎉 Proyecto Vanilla listo.";
  });
});
