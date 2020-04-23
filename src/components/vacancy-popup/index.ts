import './index.css';
import $ from 'jquery';

$(function() {
  $(document).delegate('.js-vacancy-popup-close', 'click', function() {
    $(this).closest('.js-vacancy-popup').toggleClass('hidden');
  });

  $(document).delegate('.js-vacancy-popup-open', 'click', function() {
    $(document).find('.js-vacancy-popup').toggleClass('hidden');
  })
});