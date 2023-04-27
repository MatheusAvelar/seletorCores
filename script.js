const colorInput = document.getElementById("color-input");
const colorSwatch = document.getElementById("color-swatch");
const randomColorButton = document.getElementById("random-color-button");
const colorName = document.getElementById("color-name");

randomColorButton.addEventListener("click", function() {
  const randomColor = getRandomColor();
  colorInput.value = randomColor;
  colorSwatch.style.backgroundColor = randomColor;
  colorName.innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor; // Altera o fundo da tela
});

colorInput.addEventListener("input", function() {
  colorSwatch.style.backgroundColor = colorInput.value;
  colorName.innerHTML = colorInput.value;
  document.body.style.backgroundColor = colorInput.value; // Altera o fundo da tela
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
