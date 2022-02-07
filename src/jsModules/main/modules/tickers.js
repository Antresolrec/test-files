// //бегущая строка в шапке
// let mainTicker = document.querySelector('.mainscreen__ticker');
// let tickerM = document.querySelectorAll('.mainscreen__ticker ul');
// if (mainTicker) {
//     tickerM.forEach((ticker) => {
//         headerSlideInit();
//         setInterval(headerSlide, 1);
//         function headerSlideInit() {
//             headerSlideWidth0 = ticker.offsetWidth;
//             headerSlideLeft0 = ticker.offsetLeft;
//         }
//         function headerSlide() {
//             var left = parseInt(ticker.offsetLeft);
//             let tikerUls = document.querySelectorAll('.mainscreen__ticker ul li');
//             tikerUls.forEach((el) => {
//                 var width = el.offsetWidth;
//                 var left = el.offsetLeft;
//                 if (left - 150 < headerSlideLeft0) {
//                     el.classList.add("active");
//                 }
//                 if (left - 150 < headerSlideLeft0 - width || left > headerSlideWidth0) {
//                     el.classList.remove("active");
//                 }
//             });

//         }
//     })
// }
// //бегущая строка в шапке

// function animateMarqueeOne(el, duration) {
//     const innerEl = el.querySelector('.ticker__inner--one');
//     const innerWidth = innerEl.offsetWidth;
//     const cloneEl = innerEl.cloneNode(true);
//     el.appendChild(cloneEl);



//     let start = performance.now();
//     let progress;
//     let translateX;

//     requestAnimationFrame(function step(now) {
//         progress = (now - start) / duration;

//         if (progress > 1) {
//             progress %= 1;
//             start = now;
//         }

//         translateX = innerWidth * progress - innerWidth;

//         // innerEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
//         // cloneEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
//         innerEl.style.transform = `translate(${translateX}px, 0)`;
//         cloneEl.style.transform = `translate(${translateX}px, 0)`;
//         requestAnimationFrame(step);
//     });
// }

// const tickerOne = document.querySelector('.ticker--one');

// if (tickerOne) {
//     animateMarqueeOne(tickerOne, 40000);
// }

// function animateMarqueeTwo(el, duration) {
//     const innerEl = el.querySelector('.ticker__inner--two');
//     const innerWidth = innerEl.offsetWidth;
//     const cloneEl = innerEl.cloneNode(true);
//     el.appendChild(cloneEl);

//     let start = performance.now();
//     let progress;
//     let translateX;

//     requestAnimationFrame(function step(now) {
//         progress = (now - start) / duration;

//         if (progress > 1) {
//             progress %= 1;
//             start = now;
//         }

//         translateX = innerWidth * progress;

//         innerEl.style.transform = `translate(-${translateX}px, 0)`;
//         cloneEl.style.transform = `translate(-${translateX}px, 0)`;
//         requestAnimationFrame(step);
//     });
// }

// const tickerTwo = document.querySelector('.ticker--two');

// if (tickerTwo) {
//     animateMarqueeTwo(tickerTwo, 60000);
// };



let tickerWrappers = document.querySelectorAll('.js-ticker');

function animTicker() {
    for (let index = 0; index < tickerWrappers.length; index++) {
        const ticker = tickerWrappers[index];
        const tickerList = ticker.querySelector('ul');
        const cloneEl = tickerList.cloneNode(true);
        const tickerSpeed = ticker.getAttribute('data-ticker-speed')
        ticker.appendChild(cloneEl);
        let tickerWidth = tickerList.offsetWidth;
        let tickerItems = ticker.querySelectorAll('li');
        for (let index = 0; index < tickerItems.length; index++) {
            const tickerItem = tickerItems[index];
            let start = performance.now();
            let progress;
            let translateX;
            requestAnimationFrame(function step(now) {
                progress = (now - start) / tickerSpeed;
        
                if (progress > 1) {
                    progress %= 1;
                    start = now;
                }
        
                translateX = tickerWidth * progress;
        
                if (ticker.hasAttribute('data-ticker-reverse')) {
                    tickerItem.style.transform = `translate(${translateX}px, 0)`;
                } else {
                    tickerItem.style.transform = `translate(-${translateX}px, 0)`;
                }
                requestAnimationFrame(step);
            });
        }
    }
}

if (tickerWrappers) {
    animTicker();
}