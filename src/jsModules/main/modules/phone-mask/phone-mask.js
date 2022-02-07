import * as textMaskCore from "./textMaskCoreModul/textMaskCoreModul";

let phoneMask = document.querySelectorAll('.phone-mask');

phoneMask.forEach((item) => {
    let mask = textMaskCore.createTextMaskInputElement({
        inputElement: item,
        mask: ["+","7",' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    });

    item.addEventListener('input', () => {
        mask.update();
    })
});