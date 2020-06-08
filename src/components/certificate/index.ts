import './index.css';
import $ from 'jquery';

$(function() {
  $('.js-certificate').on('click', function() {
    const img = $(this).attr('src');
    
    $('.footer').append(`<div class="certificate-popup">
      <img class="certificate-popup__img" src="${img}" alt="">
      <button class="certificate-popup__close js-certificate-popup">
        <img src="${require('../../assets/img/close.png')}" alt="">
      </button>
    </div>`);
  });

  $(document).delegate('.js-certificate-popup', 'click', removeCertificatePopup);

  function removeCertificatePopup() {
    $(this).closest('.certificate-popup').remove();
  }
});