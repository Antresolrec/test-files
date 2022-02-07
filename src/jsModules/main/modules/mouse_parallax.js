// ПАРАЛЛАКС ПРИ ДВИЖЕНИИ МЫШЬЮ
if (document.documentElement.clientWidth > 1024) {
	let MouseParallax = document.querySelectorAll('.mouse-parallax-tree');
	if (MouseParallax) {
		for (let index = 0; index < MouseParallax.length; index++) {
			let MouseParallaxItem = MouseParallax[index];
			window.addEventListener('mousemove', function (e) {
				let x = e.clientX / window.innerWidth;
				MouseParallaxItem.style.transform = 'translate(' + x * 15 + 'px)';
			});
		}
	}
	let MouseParallaxBg = document.querySelectorAll('.mouse-parallax-bg');
	if (MouseParallaxBg) {
		for (let index = 0; index < MouseParallaxBg.length; index++) {
			let MouseParallaxItemBg = MouseParallaxBg[index];
			window.addEventListener('mousemove', function (e) {
				let x = e.clientX / window.innerWidth;
				MouseParallaxItemBg.style.transform = 'translate(' + x * 30 + 'px)';
			});
		}
	}

	let MouseParallaxMan = document.querySelectorAll('.mouse-parallax-man');
	if (MouseParallaxMan) {
		for (let index = 0; index < MouseParallaxMan.length; index++) {
			let MouseParallaxItemMan = MouseParallaxMan[index];
			window.addEventListener('mousemove', function (e) {
				let x = e.clientX / window.innerWidth;
				let y = e.clientY / window.innerHeight;
				MouseParallaxItemMan.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
			});
		}
	}
}
// ПАРАЛЛАКС ПРИ ДВИЖЕНИИ МЫШЬЮ