const $cards = document.querySelectorAll('.card');

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    $modalOverlay.classList.add('active');

    const image = $card.getAttribute('id');
    $modalOverlay.querySelector('img').src = `/${image}`;
  });
}
