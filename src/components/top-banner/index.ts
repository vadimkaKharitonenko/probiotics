import './index.css';
import $ from 'jquery';

$(function() {
  if (document.documentElement.clientWidth <= 768) {
    document.querySelector('.top-banner__menu a.active')?.scrollIntoView();
  }
})