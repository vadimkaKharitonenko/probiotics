import './index.css';

$(function() {
  $(document).delegate('.js-question-submit', 'click', function() {
    $(this).closest('.question').find('.js-question-popup-container').removeClass('hidden');
  });

  $(document).delegate('.js-question-popup-close', 'click', function() {
    $(this).closest('.question').find('.js-question-popup-container').addClass('hidden');
    $(this).closest('.question').find('.js-question-popup-success').addClass('hidden');
  });

  $(document).delegate('.js-question-popup-submit', 'click', function() {
    $(this).closest('.question').find('.js-question-popup-container').addClass('hidden');
    $(this).closest('.question').find('.js-question-popup-success').removeClass('hidden');
  });
});