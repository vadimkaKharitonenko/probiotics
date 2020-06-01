/* eslint-disable */
import './index.css';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

$(function() {
    $('.js-main-news-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
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