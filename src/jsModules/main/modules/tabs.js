//Tabs
let tabs = document.querySelectorAll("._tabs");
tabs.forEach((tab) => {
	let tabsTriggers = tab.querySelectorAll("._tabs__trigger");
	let tabsBlocks = tab.querySelectorAll("._tabs__block");
	for (let index = 0; index < tabsTriggers.length; index++) {
		let tabsTrigger = tabsTriggers[index];
		tabsTrigger.addEventListener("click", function (e) {
			for (let i = 0; i < tabsTriggers.length; i++) {
				let tabsTrigger = tabsTriggers[i];
				tabsTrigger.classList.remove('_open');
				tabsBlocks[i].classList.remove('_open');
			}
			tabsTrigger.classList.add('_open');
			tabsBlocks[index].classList.add('_open');
			e.preventDefault();
		});
	}
});

let tabsSecond = document.querySelectorAll("._tabs-second");
tabsSecond.forEach((tab) => {
	let tabsTriggers = tab.querySelectorAll("._tabs-second__trigger");
	let tabsBlocks = tab.querySelectorAll("._tabs-second__block");
	for (let index = 0; index < tabsTriggers.length; index++) {
		let tabsTrigger = tabsTriggers[index];
		tabsTrigger.addEventListener("click", function (e) {
			for (let i = 0; i < tabsTriggers.length; i++) {
				let tabsTrigger = tabsTriggers[i];
				tabsTrigger.classList.remove('_open');
				tabsBlocks[i].classList.remove('_open');
			}
			tabsTrigger.classList.add('_open');
			tabsBlocks[index].classList.add('_open');
			e.preventDefault();
		});
	}
});