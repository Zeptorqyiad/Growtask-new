// Правильный скролл по якорным ссылкам
const handleAnchorClick = (e) => {
   e.preventDefault();

   const targetId = e.currentTarget.getAttribute("href").substring(1);
   const targetElement = document.getElementById(targetId);

   if (targetElement) {
      const offset = 60;
      const targetPosition =
         targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
         top: targetPosition,
         behavior: "smooth",
      });
   }
};

document.querySelectorAll(".menu__list a, .btn").forEach((anchor) => {
   anchor.addEventListener("click", handleAnchorClick);
});

// Обработки движения мыши
document.addEventListener("DOMContentLoaded", () => {
   const rightSideBlock = document.querySelector(".banner__content--rightside");

   const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Получаем размеры окна браузера
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const offsetX = -(mouseX - windowWidth / 2) * 0.05;
      const offsetY = -(mouseY - windowHeight / 2) * 0.05;

      rightSideBlock.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
   };

   document.addEventListener("mousemove", handleMouseMove);
});

// Полноценный нажатие на input
document
   .querySelector(".input-container")
   .addEventListener("click", function () {
      this.querySelector("input").focus();
   });
