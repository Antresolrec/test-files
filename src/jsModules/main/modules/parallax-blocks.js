if (document.documentElement.clientWidth > 1024) {

    let bgRellax = document.querySelectorAll('.rellax');
    if (bgRellax) {
        bgRellax.forEach((el) => {
            el = new Rellax(el, {
                speed: -10,
                center: false,
                vertical: true,
            });
        });
    };

    let bgRellaxSlow = document.querySelectorAll('.rellax-slow');
    if (bgRellaxSlow) {
        bgRellaxSlow.forEach((el) => {
            el = new Rellax(el, {
                speed: -4,
                center: false,
                vertical: true,
            });
        });
    };
    // var rellaxSlow = new Rellax('.rellax-slow', {
    //     speed: -4,
    //     center: false,
    //     vertical: true,
    // });

    let bgRellaxBottom = document.querySelectorAll('.rellax-bottom');
    if (bgRellaxBottom) {
        bgRellaxBottom.forEach((el) => {
            el = new Rellax(el, {
                speed: -3,
                center: true,
                vertical: true,
            });
        });
    };

    let bgRellaxVector = document.querySelectorAll('.rellax-vector');
    if (bgRellaxVector) {
        bgRellaxVector.forEach((el) => {
            el = new Rellax(el, {
                speed: -3,
                center: true,
                vertical: true,
                horizontal: false
            });
        });
    };

    let bgRellaxText = document.querySelectorAll('.rellax-text');
    if (bgRellaxText) {
        bgRellaxText.forEach((el) => {
            el = new Rellax(el, {
                speed: -1,
                center: true,
                vertical: true,
            });
        });
    };

    let bgRellaxBitrixSelectionUp = document.querySelectorAll('.rellax-text-up');
    if (bgRellaxBitrixSelectionUp) {
        bgRellaxBitrixSelectionUp.forEach((el) => {
            el = new Rellax(el, {
                speed: -0.3,
                center: true,
                vertical: true,
            });
        });
    };

    let bgRellaxBitrixSelectionDown = document.querySelectorAll('.rellax-text-down');
    if (bgRellaxBitrixSelectionDown) {
        bgRellaxBitrixSelectionDown.forEach((el) => {
            el = new Rellax(el, {
                speed: 0.7,
                center: true,
                vertical: true,
            });
        });
    };
};