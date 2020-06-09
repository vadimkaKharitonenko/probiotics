/* eslint-disable */
import './index.css';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

$(function() {
    const settings = {
        slidesToShow: 4,
        centerPadding: '60px',
        swipeToSlide: true,
    }

    if (document.documentElement.clientWidth <= 1240) {
        settings.slidesToShow = 2;
        settings.centerPadding = '0px';
    }

    $('.js-main-news-slider').slick({
        swipeToSlide: settings.swipeToSlide,
        slidesToShow: settings.slidesToShow,
        centerPadding: settings.centerPadding,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(document).delegate('.js-main-news-prev', 'click', function() {
        $('.js-main-news-slider').slick('slickPrev');
    })

    $(document).delegate('.js-main-news-next', 'click', function() {
        $('.js-main-news-slider').slick('slickNext');
    })
});