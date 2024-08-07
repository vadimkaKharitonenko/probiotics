import './index.css';
import $ from 'jquery';

type Slide = {
  img: string,
  text: string,
  description: string,
}

$(function () {
  function changeSlide(data: Slide) {
    $('.js-history-slider-photo').attr('src', data.img);
    $('.js-history-slider-text').text(data.text);
    $('.js-history-slider-description').text(data.description);
  }

  function goToPreviousSlide() {
    $('.active.js-history-year').prev().click();
  }

  function goToNextSlide() {
    $('.active.js-history-year').next().click();
  }

  function initHistorySlider() {
    const width: number = document.documentElement.clientWidth;

    if (width >= 1900) {
      return $('.js-history-slider-years').scrollLeft(155);
    }

    if (width >= 1600) {
      return $('.js-history-slider-years').scrollLeft(155 * 2 - 2);
    }

    if (width >= 1440) {
      return $('.js-history-slider-years').scrollLeft(155 * 3 - 77);
    }

    if (width >= 1425) {
      return $('.js-history-slider-years').scrollLeft(155 * 3 - 70);
    }

    if (width >= 1240) {
      return $('.js-history-slider-years').scrollLeft(155 * 3 + 23);
    }

    if (width >= 1024) {
      return $('.js-history-slider-years').scrollLeft(155 * 4 - 24);
    }

    if (width >= 768) {
      return $('.js-history-slider-years').scrollLeft(0);
    }
  }

  $(document).delegate('.js-history-year', 'click', function () {
    const data: Slide = $(this).data('slide');
    const index: number = $(this).data('index');
    const width: number = document.documentElement.clientWidth;
    let addiction: number = 0;
    let offset: number = 0;

    $('.js-history-year').removeClass('active');
    $(this).addClass('active');

    if (width <= 1600) {
      addiction = 1;
      offset = 2;
    }

    if (width <= 1440) {
      addiction = 2;
      offset = 77;
    }

    if (width <= 1425) {
      addiction = 1;
      offset = -85;
    }

    if (width <= 1240) {
      addiction = 2;
      offset = -23;
    }

    if (width <= 1200) {
      addiction = 3;
      offset = 24;
    }

    if (width <= 768) {
      addiction = 0;
      offset = 75 * index;
    }

    $('.js-history-slider-years').scrollLeft(155 * (index + addiction) - offset);

    changeSlide(data);
  });
  $(document).delegate('.js-history-slider-prev', 'click', goToPreviousSlide);
  $(document).delegate('.js-history-slider-next', 'click', goToNextSlide);

  initHistorySlider();
});