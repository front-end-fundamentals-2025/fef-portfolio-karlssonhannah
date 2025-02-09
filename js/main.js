const textBoxElement = document.getElementById("pop-up-text-table-book");
const coffeeBookImage = document.getElementById("coffee-book-img");

coffeeBookImage.addEventListener("mouseover", function (event) {
  textBoxElement.style.fontSize = "20px";
  textBoxElement.style.fontWeight = "bold";
});
