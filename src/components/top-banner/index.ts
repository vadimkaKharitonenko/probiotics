import './index.css';
import $ from 'jquery';

$(function() {
  if (document.documentElement.clientWidth <= 768) {
    document.querySelector('.top-banner__menu a.active')?.scrollIntoView();
  }

  function scrollHorizontally(e : any) {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    const element = document.querySelector('.top-banner__menu');
    if (!element) return;
    element.scrollLeft -= (delta*40); 
    e.preventDefault();
  }

  const topBannerMenu = document.querySelector('.top-banner__menu');

  topBannerMenu?.addEventListener("mousewheel", scrollHorizontally, false);
  topBannerMenu?.addEventListener("DOMMouseScroll", scrollHorizontally, false);
})