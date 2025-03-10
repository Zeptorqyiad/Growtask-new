document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("userForm");
   const popupLinks = document.querySelectorAll(".popup-link");
   const popupCloseIcons = document.querySelectorAll(".close-popup");
   let unlock = true;

   // Функция для замены текста label на "Error" и изменения цвета на красный
   function showError(input) {
      const label = input.closest(".input-wrapper").querySelector("label");
      if (label && !label.getAttribute("data-original-text")) {
         label.setAttribute("data-original-text", label.textContent);
         label.textContent = "Error";
         label.style.color = "red";
      }
   }

   // Функция для восстановления оригинального текста label и цвета
   function removeError(input) {
      const label = input.closest(".input-wrapper").querySelector("label");
      if (label && label.getAttribute("data-original-text")) {
         const originalText = label.getAttribute("data-original-text");
         label.textContent = originalText;
         label.style.color = "";
         label.removeAttribute("data-original-text");
      }
   }

   // Функция для проверки, полностью ли заполнен телефон
   function isPhoneFilled(phoneInput) {
      const phoneValue = phoneInput.value.trim();
      // Пример: проверка, что телефон содержит 11 цифр
      return /^\d{11}$/.test(phoneValue);
   }

   // Функция для проверки, что email содержит символ @
   function isEmailValid(emailInput) {
      const emailValue = emailInput.value.trim();
      return emailValue.includes("@");
   }

   // Функция для подсветки .checkmark красным box-shadow
   function highlightCheckboxError(checkbox) {
      const checkmark = checkbox
         .closest(".checkbox-container")
         .querySelector(".checkmark");
      if (checkmark) {
         checkmark.style.boxShadow = "0 0 0 2px red";
      }
   }

   // Функция для сброса подсветки .checkmark
   function resetCheckboxError(checkbox) {
      const checkmark = checkbox
         .closest(".checkbox-container")
         .querySelector(".checkmark");
      if (checkmark) {
         checkmark.style.boxShadow = "";
      }
   }

   // Функция для очистки всех полей формы и сброса чекбокса
   function resetForm() {
      form.reset();
      const checkbox = form.querySelector("input[type='checkbox']");
      if (checkbox) {
         checkbox.checked = false;
      }
   }

   // Функция проверки, все ли поля input заполнены и чекбокс отмечен
   function areAllInputsFilled() {
      const inputs = form.querySelectorAll(
         "input[type='text'], input[type='tel'], input[type='email']"
      );
      const checkbox = form.querySelector("input[type='checkbox']");

      let allValid = true;

      // Проверяем текстовые поля
      inputs.forEach((input) => {
         if (input.value.trim() === "") {
            showError(input);
            allValid = false;
         } else {
            // Дополнительные проверки для телефона и email
            if (input.type === "email" && !isEmailValid(input)) {
               showError(input);
               allValid = false;
            } else {
               removeError(input);
            }
         }
      });

      // Проверяем чекбокс
      if (!checkbox.checked) {
         highlightCheckboxError(checkbox);
         allValid = false;
      } else {
         resetCheckboxError(checkbox);
      }

      return allValid;
   }

   // Открытие popup
   popupLinks.forEach((popupLink) => {
      popupLink.addEventListener("click", (e) => {
         e.preventDefault();

         // Проверяем, все ли input заполнены и чекбокс отмечен
         if (areAllInputsFilled()) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            if (currentPopup && unlock) {
               const popupActive = document.querySelector(".popup.open");
               if (popupActive) popupClose(popupActive);
               popupOpen(currentPopup);
               resetForm();
            }
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

   // Добавляем проверку чекбокса перед отправкой формы
   form.addEventListener("submit", (e) => {
      const checkbox = form.querySelector("input[type='checkbox']");
      if (!checkbox.checked) {
         e.preventDefault();
         highlightCheckboxError(checkbox);
      }
   });
});
