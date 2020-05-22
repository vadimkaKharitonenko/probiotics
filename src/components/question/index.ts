import './index.css';

$(function() {
  $(document).delegate('.js-question-submit', 'click', function() {
    $(document).find('.js-question-popup-container').removeClass('hidden');
  });

  $(document).delegate('.js-question-popup-close', 'click', function() {
    $(document).find('.js-question-popup-container').addClass('hidden');
    $(document).find('.js-question-popup-success').addClass('hidden');
  });

  $(document).delegate('.js-question-popup-submit', 'click', function() {
    $(document).find('.js-question-popup-container').addClass('hidden');
    $(document).find('.js-question-popup-success').removeClass('hidden');
  });
});