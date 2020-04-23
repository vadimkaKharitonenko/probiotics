import './index.css';
import $ from 'jquery';

$(function() {
    $(document).delegate('.js-header-search-open', 'click', function() {
        $(this).closest('.header').addClass('search-is-open');
    }); 

    $(document).delegate('.js-header-search-close', 'click', function() {
        $(this).closest('.header').removeClass('search-is-open');
    }); 

    $(document).delegate('.js-header-menu', 'click', function() {
        $(this).toggleClass('expanded');
        $(this).closest('.header-container').find('.js-header-main-menu').toggleClass('hidden');
    })
})