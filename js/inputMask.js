let inputs = document.querySelector('input[type="tel"]');
let im = new Inputmask("8 (999) 999-99-99");
im.mask(inputs);

const emailInput = document.getElementById("mailInput");
const emailMask = IMask(emailInput, { mask: /^\S*@?\S*$/ });
