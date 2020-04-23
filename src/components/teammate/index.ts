import './index.css';
import $ from 'jquery';

$(function () {
  $(document).delegate('.js-teammate', 'click', function () {
    const detail = $(this).data('detail');
    const name = $(this).find('.teammate__name').text();
    const position = $(this).find('.teammate__position').text();
    const img = $(this).find('.teammate__img').attr('src');

    document.body.insertAdjacentHTML(`beforeend`, `
      <div class="teammate-popup js-teammate-popup">
        <div class="teammate-popup__content">
          <button class="teammate-popup__close js-teammate-popup-close">
            <img src="img/close.png" alt="close">
          </button>
          <img class="teammate-popup__img" src="${img}" alt="Teammate">
          <div class="teammate-popup__info">
            <div class="teammate-popup__name">${name}</div>
            <div class="teammate-popup__position">${position}</div>
            <div class="teammate-popup__description">
              ${Array.from(detail).map((text, i) => `<p key=${i}>${text}</p>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `);
  });

  $(document).delegate('.js-teammate-popup-close', 'click', function() {
    $('.js-teammate-popup').remove();
  });
});