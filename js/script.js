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
   let isAnimating = false;

   const handleMouseMove = (e) => {
      if (window.innerWidth <= 768) return;

      if (isAnimating) return;
      isAnimating = true;

      requestAnimationFrame(() => {
         const mouseX = e.clientX;
         const mouseY = e.clientY;

         const windowWidth = window.innerWidth;
         const windowHeight = window.innerHeight;

         const offsetX = Math.round(-(mouseX - windowWidth / 2) * 0.05);
         const offsetY = Math.round(-(mouseY - windowHeight / 2) * 0.05);

         rightSideBlock.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
         isAnimating = false;
      });
   };

   document.addEventListener("mousemove", handleMouseMove);
});
