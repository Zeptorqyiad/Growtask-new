const switchInput = document.getElementById("switchInput");
const gradientBlock = document.getElementById("gradientBlock");

const color1 = "rgb(137, 122, 204)";
const color2 = "rgb(204, 41, 163)";
const color3 = "rgb(242, 48, 81)";

const switchBlock = () => {
   if (switchInput.checked) {
      gradientBlock.style.background = "#897ACC";
   } else {
      gradientBlock.style.background = `linear-gradient(90.00deg, ${color1}, ${color2} 49.479%, ${color3} 100%)`;
   }
};

// const gridItem = document.querySelectorAll(".grid__item");
// const contentItem = document.querySelectorAll(".grid__item--content");

// gridItem.forEach((li) => {
//    li.addEventListener("click", () => {
//       contentItem.forEach((item) => {
//          item.style.display = "block"; // Решить проблему
//       });
//    });
// });
