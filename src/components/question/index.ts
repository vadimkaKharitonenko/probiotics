import './index.css';
import $ from "jquery";

$(function() {
  $(document).delegate('.js-question-submit', 'click', function() {
    $('body').css('overflow-y', 'hidden');
    $(document).find('.js-question-popup-container').removeClass('hidden');
  });

  $(document).delegate('.js-question-popup-close', 'click', function() {
    $('body').css('overflow-y', 'auto');
    $(document).find('.js-question-popup-container').addClass('hidden');
    $(document).find('.js-question-popup-success').addClass('hidden');
  });

  $(document).delegate('.js-question-popup-submit', 'click', function() {
    if (!validateForm($(this))) return;

    $(document).find('.js-question-popup-container').addClass('hidden');
    $(document).find('.js-question-popup-success').removeClass('hidden');
  });

  $(document).delegate('.question__popup-fields input', 'click', function() {
    $(this).closest('.field').removeClass('error');
  });

  $(document).delegate('.question__popup-fields textarea', 'click', function() {
    $(this).removeClass('error');
  });

  function validateForm(button: any) {
    const fieldsContainer = $(button).closest('.question__popup').find('.question__popup-fields');
    const inputs = $(fieldsContainer).find('input');
    const textarea = $(fieldsContainer).find('textarea');
    const agreement = $(button).next().find('input').prop('checked');
    const validation = {
      errors: 0,
    };

    Array.from(inputs).forEach(input => {
      if (input.value !== '') return;
      validation.errors++;
      $(input).closest('.field').addClass('error');
    });

    if ($(textarea).val() === '') {
      validation.errors++;
      $(textarea).addClass('error');
    }

    if (!agreement) {
      validation.errors++;
    }

    return !(validation.errors > 0);
  }
});