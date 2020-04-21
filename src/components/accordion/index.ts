import './index.css';
import $ from 'jquery';

$(function() {
  $(document).delegate('.js-accordion-item', 'click', function() {
    $(this).closest('.accordion-item').toggleClass('expanded');
    $(this).find('.js-plus-button').toggleClass('active');
  })

  $(document).delegate('.js-accordion-item .js-plus-button', 'click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
});