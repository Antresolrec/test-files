// подсказка главная страница Цены на наши услуги в тюмени
let priceTooltips = document.querySelectorAll('.tippy-main-price');
if (priceTooltips) {
    priceTooltips.forEach((tooltip) => {
        let parentTooltip = tooltip.parentNode;
        tippy(parentTooltip, {
            content: tooltip,
            interactive: true,
            followCursor: 'initial',
            placement: 'bottom-start',
            theme: 'light',
            duration: [800, 400],
            appendTo: () => document.body,
        });
    });
}


// подсказка портфолио на внутренних страницах
let tooltips = document.querySelectorAll('.tippy-portfolio-inside');
if (tooltips) {
    tooltips.forEach((tooltip) => {
        let parentTooltip = tooltip.parentNode;
        tippy(parentTooltip, {
            content: tooltip,
            interactive: true,
            followCursor: 'initial',
            placement: 'bottom-start',
            theme: 'light',
            duration: [800, 400],
            appendTo: () => document.body,
        });
    });
}

