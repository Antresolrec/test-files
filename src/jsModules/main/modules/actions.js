const navHeader = document.querySelector('.header__nav');
const iconBurger = document.querySelector('.menu-burger');
const stepMenu = document.querySelector('.submenu__step-back');
const subMenu = document.querySelectorAll('.submenu > a');
const subList = document.querySelectorAll('.sublist__item > a');
const searchHeaderIcon = document.querySelector(
  '.search-header__icon--trigger'
);

let unlock = true;

function bodyLockRemove(delay) {
  const body = document.querySelector('body');
  if (unlock) {
    const lockPadding = document.querySelectorAll('.js-lock-padding');
    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, delay);

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}

function bodyLockAdd(delay) {
  const body = document.querySelector('body');
  if (unlock) {
    const lockPadding = document.querySelectorAll('.js-lock-padding');
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = `${
        window.innerWidth - document.querySelector('.wrapper').offsetWidth
      }px`;
    }
    body.style.paddingRight = `${
      window.innerWidth - document.querySelector('.wrapper').offsetWidth
    }px`;
    body.classList.add('_lock');

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}

function bodyLock(delay) {
  const body = document.querySelector('body');
  if (body.classList.contains('_lock')) {
    bodyLockRemove(delay);
  } else {
    bodyLockAdd(delay);
  }
}
function menuClose(delay) {
  const menuBody = document.querySelector('.menu-mobile');
  const headerBody = document.querySelector('.header__body');
  iconBurger.classList.remove('js-menu-open');
  menuBody.classList.remove('js-menu-open');
  headerBody.classList.remove('js-menu-open');
  bodyLockRemove(delay);
}

if (iconBurger != null) {
  const delay = 500;
  const menuBody = document.querySelector('.menu-mobile');
  const headerBody = document.querySelector('.header__body');
  iconBurger.addEventListener('click', (e) => {
    e.preventDefault();
    if (unlock) {
      bodyLock(delay);
      iconBurger.classList.toggle('js-menu-open');
      menuBody.classList.toggle('js-menu-open');
      headerBody.classList.toggle('js-menu-open');
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1400) {
      menuClose();
    }
  });
}

function openSearchHeader(el) {
  navHeader.classList.add('js-nav-hidden');
  if (window.innerWidth > 700) {
    setTimeout(() => {
      el.parentNode.classList.add('js-search-open');
    }, 1000);
  } else {
    el.parentNode.classList.add('js-search-open');
  }
}

function closeSearchHeader(e) {
  if (
    (!e.target.closest('.search-header') ||
      e.target.closest('.search-header__icon--close')) &&
    searchHeaderIcon.parentNode.classList.contains('js-search-open')
  ) {
    navHeader.classList.remove('js-nav-hidden');
    searchHeaderIcon.parentNode.classList.remove('js-search-open');
  }
}

if (searchHeaderIcon) {
  searchHeaderIcon.addEventListener('click', () => {
    openSearchHeader(searchHeaderIcon);
  });
  window.addEventListener('click', closeSearchHeader);
}

subMenu.forEach((el) => {
  el.addEventListener('mouseover', () => {
    el.parentNode.classList.add('js-submenu-open');
    if (
      el.parentNode.classList.contains('header__user') ||
      (el.classList.contains('_spoller') && !el.classList.contains('_init'))
    ) {
      menuClose();
    } else if (el.parentNode.classList.contains('submenu--big')) {
      const sublistItem = document.querySelector(
        '.submenu--big .sublist__item'
      );
      sublistItem.classList.add('js-sublist-open');
    }
  });
  el.parentNode.addEventListener('mouseleave', () => {
    el.parentNode.classList.remove('js-submenu-open');
  });
});

subList.forEach((el) => {
  el.addEventListener('mouseover', () => {
    el.parentNode.classList.add('js-sublist-open');
  });
  el.parentNode.addEventListener('mouseleave', () => {
    el.parentNode.classList.remove('js-sublist-open');
  });
});

if (stepMenu) {
  const stepMenuParent = stepMenu.closest('.submenu--big');
  stepMenu.addEventListener('click', () => {
    if (stepMenuParent.classList.contains('js-submenu-open')) {
      stepMenuParent.classList.remove('js-submenu-open');
    }
  });
}

function scrollHeader() {
  const srcValue = window.pageYOffset;
  const header = document.querySelector('.header__wrapper');
  if (header !== null) {
    if (srcValue > 100) {
      header.classList.add('js-header-scroll');
    } else {
      header.classList.remove('js-header-scroll');
    }
  }
}

window.addEventListener('scroll', scrollHeader);


let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;

let slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return slideDown(target, duration);
		} else {
			return slideUp(target, duration);
		}
	}
}

if (spollers.length > 0) {

	function spollerCLick(e) {
		e.preventDefault();
		const spoller = e.target;
		if (spollersGo) {
			spollersGo = false;

			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curentSpollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curentSpollers.length; i++) {
					let el = curentSpollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			slideToggle(spoller.nextElementSibling);

			setTimeout(function () {
				spollersGo = true;
			}, 500);
		}
	}
	function spollersInit() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			let spollerMax = spoller.getAttribute('data-max');

			if (spollerMax && window.innerWidth > spollerMax) {
				if (spoller.classList.contains('_init')) {
					spoller.classList.remove('_active');
					spoller.classList.remove('_init');
					spoller.nextElementSibling.style.cssText = '';
					spoller.removeEventListener("click", spollerCLick);
				}
			} else if (!spoller.classList.contains('_init')) {
				spoller.classList.add('_init');
				spoller.addEventListener("click", spollerCLick);
			}
		}
	}
	function spollersShowActive() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			if (spoller.classList.contains('_active')) {
				slideToggle(spoller.nextElementSibling);
			}
		}
	}
	window.addEventListener("resize", spollersInit);

	setTimeout(function () {
		spollersShowActive();
		spollersInit();
	}, 0);
}