import './index.css';
import $ from 'jquery';

$(function () {
  $('.js-photo-slider').slick({
    arrows: false
  });

  $('.js-photo-slider-prev').on('click', function() {
    $(this).closest('.photo-slider').find('.js-photo-slider').slick('slickPrev');
  });

  $('.js-photo-slider-next').on('click', function() {
    $(this).closest('.photo-slider').find('.js-photo-slider').slick('slickNext');
  });
});