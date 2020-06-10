/* eslint-disable */
import './index.css';

$(function () {
  $(document).on('scroll', function() {
    if (document.documentElement.clientHeight - window.pageYOffset < 1000) {
      if (document.querySelector('#contactsMap').childElementCount === 0) {
        init();
      }
    }
  });

  function init() {
    const contactsMap = new ymaps.Map('contactsMap', {
      center: [55.76, 37.64],
      zoom: 10,
    });

    const placemark = new ymaps.Placemark([55.76, 37.56], {}, {
      iconLayout: 'default#image',
      iconImageHref: require('../../assets/img/placemark.png'),
      iconImageSize: [35, 44],
      iconImageOffset: [-3, -42]
    });

    const placemark2 = new ymaps.Placemark([56.76, 37.56], {}, {
      iconLayout: 'default#image',
      iconImageHref: require('../../assets/img/placemark.png'),
      iconImageSize: [35, 44],
      iconImageOffset: [-3, -42]
    });

    contactsMap.geoObjects.add(placemark);
    contactsMap.geoObjects.add(placemark2);
  }
});