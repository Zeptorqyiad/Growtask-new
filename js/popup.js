document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("userForm");
   const popupLinks = document.querySelectorAll(".popup-link");
   const popupCloseIcons = document.querySelectorAll(".close-popup");
   let unlock = true;

   // Функция проверки, все ли поля input заполнены
   function areAllInputsFilled() {
      const inputs = form.querySelectorAll("input");
      return Array.from(inputs).every((input) => input.value.trim() !== "");
   }

   // Открытие popup
   popupLinks.forEach((popupLink) => {
      popupLink.addEventListener("click", (e) => {
         e.preventDefault();

         // Проверяем, все ли input заполнены
         if (areAllInputsFilled()) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            if (currentPopup && unlock) {
               const popupActive = document.querySelector(".popup.open");
               if (popupActive) popupClose(popupActive); // Закрываем активный popup, если есть
               popupOpen(currentPopup); // Открываем текущий popup
            }
         } else {
            // alert("Пожалуйста, заполните все поля формы.");
         }
      });
   });

   // Закрытие popup
   popupCloseIcons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
         popupClose(icon.closest(".popup"));
         e.preventDefault();
      });
   });

   // Функция открытия popup
   function popupOpen(currentPopup) {
      if (currentPopup && unlock) {
         currentPopup.classList.add("open");
         currentPopup.addEventListener("click", (e) => {
            if (!e.target.closest(".popup__content")) popupClose(currentPopup);
         });
      }
   }

   // Функция закрытия popup
   function popupClose(popupActive) {
      if (unlock) popupActive.classList.remove("open");
   }

   // Закрытие popup по клавише Esc
   document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
         const popupActive = document.querySelector(".popup.open");
         if (popupActive) popupClose(popupActive);
      }
   });

   // Полифиллы для старых браузеров
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         let node = this;
         while (node && !node.matches(css)) node = node.parentElement;
         return node;
      };
   }

   if (!Element.prototype.matches) {
      Element.prototype.matches =
         Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
});
