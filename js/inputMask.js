let inputs = document.querySelector('input[type="tel"]');
let im = new Inputmask("8 (999) 999-99-99");
im.mask(inputs);

$(document).ready(function () {
   $("#email").inputmask({
      mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
      greedy: false,
      definitions: {
         "*": {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
            cardinality: 1,
            casing: "lower",
         },
      },
   });
});

// Полноценный нажатие на input
document
   .querySelector(".input-container")
   .addEventListener("click", function () {
      this.querySelector("input").focus();
   });
