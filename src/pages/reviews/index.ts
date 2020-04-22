import './index.css';
import $ from 'jquery';

$(function() {
  $(document).delegate('.js-review-more', 'click', function() {
    $(this).prev().text($(this).prev().data('fulltext'));
    $(`<span class='review__collapse js-review-collapse'>Свернуть</span>`).insertAfter($(this));
    $(this).remove();
  });

  $(document).delegate('.js-review-collapse', 'click', function() {
    expandReview(this.previousSibling);
    $(this).remove();
  });

  function expandReview(review : Element) {
    const text = review.textContent;
    if (text && text.length <= 350) return; 
    const textSliced = text?.slice(0, 350) + '...';

    review.textContent = textSliced;

    if (text) {
      review.setAttribute('data-fulltext', text);
      review.insertAdjacentHTML('afterend', `<span class='review__more js-review-more'>Читать полностью</span>`)
    } 
  }

  function initReviews() {
    const reviews = document.querySelectorAll('.review__description');

    if (reviews) {
      Array.from(reviews).forEach(review => {
        expandReview(review);
       
      });
    }
  }

  initReviews();
})
