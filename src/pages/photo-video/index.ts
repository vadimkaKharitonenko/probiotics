import './index.css';
import $ from 'jquery';
import 'slick-carousel';

type Photos = {
  originals: string[],
  thumbnails: string[]
}

$(function() {
  const createVideoPopup = (video: string) => document.body.insertAdjacentHTML(`beforeend`, `
    <section class="media-popup-video">
      <div class="media-popup-video__content">
        <button class="media-popup-video__close js-media-popup-video-close">
          <img src="img/close.png" alt="close">
        </button>
        <iframe src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </section>
  `);

  const createPhotoPopup = (photos: Photos) =>  document.body.insertAdjacentHTML(`beforeend`, `
    <section class="media-popup-photo">
      <div class="media-popup-photo__content">
        <button class="media-popup-photo__close js-media-popup-photo-close">
          <img src="img/close.png" alt="Close"/>
        </button>
        <button class="media-popup-photo__prev js-media-popup-photo-prev">
          <img src="img/left-angle.png" alt="prev"/>
        </button>
        <button class="media-popup-photo__next js-media-popup-photo-next">
          <img src="img/right-angle.png" alt="next"/>
        </button>
        <div class="media-popup-photo__originals js-media-popup-photo-originals">
          ${photos.originals.map((photo, i) => `<img key="${i}" src="${photo}" class="original" alt="slide" />`).join('')}
        </div>
        <div class="media-popup-photo__thumbnails js-media-popup-photo-thumbnails">
          ${photos.thumbnails.map((thumbnail, i) => `<div key="${i}" class="slide"><img src="${thumbnail}" class="thumbnail" alt="thumbnail" /></div>`).join('')}
        </div>
      </div>
    </section>
  `);

  const initGallerySlider = () => {
    const originals = $('.js-media-popup-photo-originals');
    const thumbnails = $('.js-media-popup-photo-thumbnails');

    if (!originals || !thumbnails) return;

    $(originals).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-media-popup-photo-thumbnails'
    });
    $(thumbnails).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-media-popup-photo-originals',
      arrows: false,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '186px'
    });
  }

  $(document).delegate('.js-media-popup-photo-close', 'click', function() {
    $(this).closest('.media-popup-photo').remove();
  });

  $(document).delegate('.js-media-popup-photo-prev', 'click', function() {
    $('.js-media-popup-photo-originals').slick('slickPrev');
  });

  $(document).delegate('.js-media-popup-photo-next', 'click', function() {
    $('.js-media-popup-photo-originals').slick('slickNext');
  });

  $(document).delegate('.js-media-item-photo', 'click', function() {
    const photos = $(this).data('photos');

    createPhotoPopup(photos);
    initGallerySlider();
  });

  $(document).delegate('.js-media-item-video', 'click', function() {
    const video = $(this).data('video');
    createVideoPopup(video);
  });

  $(document).delegate('.js-media-popup-video-close', 'click', function() {
    $(this).closest('.media-popup-video').remove();
  });
});