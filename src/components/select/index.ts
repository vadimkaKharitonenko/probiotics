import './index.css';
import $ from 'jquery';

$(function () {
    $(document).delegate('.js-select-current', 'click', function () {
        $(this).closest('.select').toggleClass('is-expanded');
    });

    $(document).delegate('.js-select-option', 'click', function () {
        $(this).closest('.select').find('.js-select-current span').text($(this).text());
        $(this).closest('.select').toggleClass('is-expanded');
    });

    $(document).on('click', function (e : {target: any}) {
        const select = $('.select');
        if (!$(select).is(e.target) && $(select).has(e.target).length === 0) {
            $(select).removeClass('is-expanded');
        }
    });
});