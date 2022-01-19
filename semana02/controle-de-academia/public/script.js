const $cards = document.querySelectorAll('.card');
const $closeModal = document.querySelector('.material-icons');

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    const videoId = $card.getAttribute('id');

    window.location.href = `/video?id=${videoId}`;
  });
}
