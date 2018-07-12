'use strict';

document.ready = (function() {
    // Вешаем обработчик на открытие модального окна
    let modalBtn = document.querySelector('.js-modal-target');
    if (modalBtn) {
        modalBtn.addEventListener('click', function(evt) {
            if (evt) {
                evt.preventDefault();
            }
            let modal = document.querySelector(`.js-modal`);
            if (modal) {
                modal.classList.add('modal-visible');
                
                // Вешаем обработчик закрытия модального окна
                modal.querySelector('.js-modal-close').addEventListener('click', closeModal);
            }
        });       
    }
})();

// Закрытия модального окна
function closeModal() {
    let modal = document.querySelector('.modal-visible');
    if (modal) {
        modal.classList.remove('modal-visible');
        this.removeEventListener('click', closeModal);
    }
}


var yandexMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    yandexMap = new ymaps.Map('ya-map', {
        center: [59.938631, 30.323055],
        zoom: 15,
        controls: ["zoomControl"]
    }, {
        searchControlProvider: 'yandex#search'
    });
    let myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: 'ул. Б. Конюшенная, д. 19/8'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/bg/map-marker-png.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-58, -193]
    });
    yandexMap.geoObjects.add(myPlacemark);
    yandexMap.behaviors.disable("scrollZoom");
}