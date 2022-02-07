

var backToTop = document.querySelector('.back-to-top');


if (backToTop) {
	window.addEventListener('scroll', trackScroll);

	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			backToTop.classList.add('_show');
		}
		if (scrolled < coords) {
			backToTop.classList.remove('_show');
		}
	}
}








let menuParents = document.querySelectorAll('.link-parent');
for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener("mouseenter", function (e) {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener("mouseleave", function (e) {
		menuParent.classList.remove('_active');
	});
}







window.addEventListener('resize', cardsChange())
function cardsChange() {
	let cards = document.querySelectorAll("._cards");
	for (let index = 0; index < cards.length; index++) {
		let card = cards[index];
		let cards_items = card.querySelectorAll("._cards-item");
		let cards_blocks = card.querySelectorAll("._cards-block");
		for (let index = 0; index < cards_items.length; index++) {
			let cards_item = cards_items[index];
			cards_item.addEventListener("click", function (e) {
				for (let index = 0; index < cards_items.length; index++) {
					let cards_item = cards_items[index];
					cards_item.classList.remove('_active');
					cards_blocks[index].classList.remove('_active');
				}
				cards_item.classList.add('_active');
				cards_blocks[index].classList.add('_active');
				e.preventDefault();
			});
		}
	}

}




//Tabs
let tabsPrice = document.querySelectorAll(".main-price__row");
for (let index = 0; index < tabsPrice.length; index++) {
	let tabPrice = tabsPrice[index];
	let tabsPrice_items = tabPrice.querySelectorAll(".main-price__item");
	let tabsPrice_blocks = tabPrice.querySelectorAll(".main-price__column");
	for (let index = 0; index < tabsPrice_items.length; index++) {
		let tabsPrice_item = tabsPrice_items[index];
		tabsPrice_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabsPrice_items.length; index++) {
				let tabsPrice_item = tabsPrice_items[index];
				tabsPrice_item.classList.remove('_active');
				tabsPrice_blocks[index].classList.remove('_active');
			}
			tabsPrice_item.classList.add('_active');
			tabsPrice_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}



let headerTest = document.querySelector('.menu__body');
let headerTestNav = document.querySelector('.nav-header')
let headerLogo = document.querySelector('.logo-header')

if (headerTest) {
	function navHide() {
		if (headerTest.classList.contains('_active')) {
			headerTestNav.classList.add('_active');
			headerLogo.classList.add('_active');
		} else {
			headerTestNav.classList.remove('_active');
			headerLogo.classList.remove('_active');
		}
	}

	window.addEventListener('click', navHide)
}














// ТАБЫ ДОСТИЖЕНИЯ
let departmentTitle = document.querySelector('.department-achievements__title');
let departmentTabs = document.querySelectorAll('.department-achievements__tab');
let achievTabs = document.querySelectorAll('.achievements__head-tab');

function departmentClick() {
	departmentTabs.forEach((el) => {
		if (el.classList.contains('_active')) {
			departmentTitle.classList.add('_color');
		}
	})
	achievTabs.forEach((el) => {
		if (el.classList.contains('_active')) {
			departmentTitle.classList.remove('_color');
		}
	})

}

window.addEventListener('click', departmentClick)





// удаление бегущей строки на мобилке
// let tickerMobile = document.querySelectorAll('.ticker-wrapper');

// function tickerRemove() {
// 	if (window.innerWidth < 480) {
// 		tickerMobile.forEach((el) => {
// 			el.remove()
// 		})
// 	};
// }



// window.addEventListener('resize', () => {
// 	tickerRemove();
// });


var headerShadow = document.querySelector('.header');
var panelShadow = document.querySelector('.panel__shadow');
var screenContent = document.querySelector('.panel__content');

if (panelShadow) {
	function addShadow() {
		if (headerShadow.classList.contains('_scroll')) {
			panelShadow.classList.add('_show');
			screenContent.classList.add('_hide')
		} else {
			panelShadow.classList.remove('_show');
			screenContent.classList.remove('_hide')
		}
	}

	window.addEventListener('scroll', () => {
		addShadow()
	})
}





// let planTabs = document.querySelectorAll('.plan-stages__tab');

// planTabs.forEach((tab) => {
// 	function planTabColor() {
// 		tab.style.color = "#1F60D1";
// 	}
// 	tab.addEventListener('click', () => {
// 		planTabColor();
// 	})
// })


