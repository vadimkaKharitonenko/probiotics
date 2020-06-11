import './index.css';
import $ from 'jquery';

$(function() {
  $(document).delegate('.js-vacancy-popup-close', 'click', function() {
    $('body').css('overflow-y', 'auto');
    $(this).closest('.js-vacancy-popup').toggleClass('hidden');
  });

  $(document).delegate('.js-vacancy-popup-open', 'click', function() {
    $('body').css('overflow-y', 'hidden');
    $(document).find('.js-vacancy-popup').toggleClass('hidden');
  });

  $(document).delegate('.js-vacancy-popup .field__input', 'focus', function() {
    $(this).closest('.field').removeClass('error');
  });

  $(document).delegate('.js-vacancy-popup textarea', 'focus', function() {
    $(this).removeClass('error');
  });

  $(document).delegate('.js-vacancy-popup-submit', 'click', function() {
    const container = $(this).closest('.js-vacancy-popup');
    const inputs = $(container).find('.field__input');
    const textarea = $(container).find('textarea');
    const agreement = $(container).find('input[type="checkbox"]');

    let errors = 0;

    Array.from(inputs).forEach(input => {
      if (!$(input).val()) {
        errors++;
        $(input).closest('.field').addClass('error');
      }
    });

    if (!$(textarea).val()) {
      errors++;
      $(textarea).addClass('error');
    }

    if (!$(agreement).prop('checked')) {
      errors++;
    }

    if (errors === 0) {
      $('.js-question-popup-success').removeClass('hidden');
      $(container).addClass('hidden');
    }

    // TODO: request
  });
});