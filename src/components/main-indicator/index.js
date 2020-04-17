import './index.css';
import $ from 'jquery';

$(function () {
  $(document).delegate('.js-main-indicator .main-indicator__dot', 'click', function () {
    $('.js-main-indicator .main-indicator__dot').removeClass('active');
    $(this).addClass('active');
  });
});



