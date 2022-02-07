var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "100%"
    }
});

var slides = document.querySelectorAll(".panel");

for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
    })
        .setPin(slides[i], { pushFollowers: false })
        .addTo(controller);
}