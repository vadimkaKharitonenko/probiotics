/* eslint-disable */
import './index.css';

$(function () {
  if (document.querySelector('#map')) {
    ymaps.ready(init);
  }

  function init() {
    const map = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10
    });

    const placemark = new ymaps.Placemark([55.76, 37.56], {}, {
      iconLayout: 'default#image',
      iconImageHref: require('../../assets/img/placemark.png'),
      iconImageSize: [35, 44],
      iconImageOffset: [-3, -42]
    });

    map.geoObjects.add(placemark);
  }
});