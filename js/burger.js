window.onload = () => {
   const burgerBlock = document.querySelector(".burger__block");
   const burgerIcons = document.querySelectorAll(".burger__icon");
   const mainWrapper = document.getElementById("main");
   const navLinks = document.querySelectorAll(".menu__list a");

   // Функция для вычисления ширины скроллбара
   const getScrollbarWidth = () => {
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll";
      document.body.appendChild(outer);

      const inner = document.createElement("div");
      outer.appendChild(inner);

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);

      return scrollbarWidth;
   };

   // Устанавливаем CSS-переменную с шириной скроллбара
   document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${getScrollbarWidth()}px`
   );

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

   // Закрытие бургер меню при клике на nav li
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
