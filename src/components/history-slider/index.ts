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

  function initHistorySlider() {
    const width: number = document.documentElement.clientWidth;

    if (width >= 1900) {
      return $('.js-history-slider-years').scrollLeft(155);
    }

    if (width <= 1600) {
      return $('.js-history-slider-years').scrollLeft(155 * 2 - 2);
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

    $('.js-history-slider-years').scrollLeft(155 * (index + addiction) - offset);

    changeSlide(data);
  });

  initHistorySlider();
});