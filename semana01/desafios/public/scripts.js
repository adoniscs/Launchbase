const $modalOverlay = document.querySelector('.modal-overlay');
const $modal = document.querySelector('.modal');
const $cards = document.querySelectorAll('.card');
const $buttonCloseModal = document.querySelector('.close-modal');
const $buttonOpenFullModal = document.querySelector('.maximize');

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    const postId = $card.getAttribute('id');

    window.location.href = `/course/${postId}`;
  });
}
