const textBoxElement = document.getElementById("pop-up-text-table-book");
const coffeeBookImage = document.getElementById("coffee-book-img");
const textHoverElement = document.getElementById("hover-text");

coffeeBookImage.addEventListener("mouseover", function (event) {
  textBoxElement.style.fontWeight = "bold";
  textHoverElement.style.display = "block";
});

coffeeBookImage.addEventListener("mouseleave", function (event) {
  textBoxElement.style.fontWeight = "normal";
  textHoverElement.style.display = "none";
});
