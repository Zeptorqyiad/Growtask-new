window.onload = () => {
   const burgerBlock = document.querySelector(".burger__block");
   const burgerIcons = document.querySelectorAll(".burger__icon");
   const mainWrapper = document.getElementById("main");
   const navLinks = document.querySelectorAll(".menu__list a");

   const toggleMenu = () => {
      // Закрытие меню
      if (burgerBlock.classList.contains("open")) {
         burgerBlock.classList.remove("open");
         document.body.classList.remove("_lock");
         mainWrapper.classList.remove("dimmed");
      } else {
         // Открытие меню
         burgerBlock.classList.add("open");
         document.body.classList.add("_lock");
         mainWrapper.classList.add("dimmed");
      }
   };

   // Закрытие бергер меню при клике на nav li
   navLinks.forEach((link) => {
      link.addEventListener("click", () => {
         burgerBlock.classList.remove("open");
         document.body.classList.remove("_lock");
         mainWrapper.classList.remove("dimmed");
      });
   });

   burgerIcons.forEach((icon) => {
      icon.addEventListener("click", toggleMenu);
   });
};
