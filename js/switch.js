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

const gridItems = document.querySelectorAll(".grid__item");
const contentItems = document.querySelectorAll(".grid__item--content");

gridItems.forEach((item, index) => {
   item.addEventListener("click", () => {
      // Переключаем класс open для текущего элемента
      item.classList.toggle("open");

      // Переключаем отображение соответствующего контента
      if (item.classList.contains("open")) {
         contentItems[index].style.display = "block";
      } else {
         contentItems[index].style.display = "none";
      }
   });
});
