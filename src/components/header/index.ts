import './index.css';
import $ from 'jquery';

$(function() {
    $(document).delegate('.js-header-search-open', 'click', function() {
        $(this).closest('.header').addClass('search-is-open');
    }); 

    $(document).delegate('.js-header-search-close', 'click', function() {
        $(this).closest('.header').removeClass('search-is-open');
    }); 
})