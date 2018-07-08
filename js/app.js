var yandexMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    yandexMap = new ymaps.Map('ya-map', {
        center: [59.938631, 30.323055],
        zoom: 15,
    }, {
        searchControlProvider: 'yandex#search'
    });
    let myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: 'ул. Б. Конюшенная, д. 19/8'
    }, {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/bg/map-marker-png.png',
        // Размеры метки.
        iconImageSize: [231, 190],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-58, -193]
    });
    yandexMap.geoObjects.add(myPlacemark);
}