(function () {
  const buttons = document.querySelectorAll("._btn");

  buttons.forEach(button => {
    ["mouseenter", "mouseout"].forEach(evt => {
      button.addEventListener(evt, e => {
        let parentOffset = button.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.clientY - parentOffset.top;

        const span = button.getElementsByTagName("span");
        if (span) {
          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        }

      });
    });
  });
})();
