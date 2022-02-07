


/* YA
function map(n) {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [43.585525, 39.723062],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10
		});

		let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
		},{
			// Опции.
			//balloonContentHeader: 'Mistoun',
			//balloonContentBody: 'Москва, Николоямская 40с1',
			//balloonContentFooter: '+ 7(495) 507-54 - 90',
			//hasBalloon: true,
			//hideIconOnBalloonOpen: true,

			hasBalloon: false,
			hideIconOnBalloonOpen: false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map.svg',
			// Размеры метки.
			iconImageSize: [40, 40],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -20],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0, 0],
		});
		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
	}
}
*/