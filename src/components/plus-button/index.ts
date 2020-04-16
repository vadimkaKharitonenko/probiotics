import './index.css';
import $ from 'jquery';

$(function() {
    $(document).delegate('.js-plus-button', 'click', function() {
        $(this).toggleClass('active');
    }); 
})