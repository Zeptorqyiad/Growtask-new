new Swiper(".custom-swiper", {
   loop: true,
   direction: "horizontal",

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   slidesPerView: "auto",

   breakpoints: {
      1450: {
         slidesPerView: 4,
      },
   },
});
