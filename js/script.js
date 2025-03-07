// Burger Menu

window.onload = () => {
   const burgerBlock = document.querySelector(".burger__block");
   const burgerIcons = document.querySelectorAll(".burger__icon");

   const toggleMenu = () => {
      // Закрытие меню
      if (burgerBlock.classList.contains("open")) {
         burgerBlock.classList.remove("open");
         document.body.classList.remove("_lock");
      } else {
         // Открытие меню
         burgerBlock.classList.add("open");
         document.body.classList.add("_lock");
      }
   };

   // Добавляем обработчик клика на все иконки бургера
   burgerIcons.forEach((icon) => {
      icon.addEventListener("click", toggleMenu);
   });
};
