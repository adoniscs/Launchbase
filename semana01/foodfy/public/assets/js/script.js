const $modalOverlay = document.querySelector('.modal-overlay');
const $closeModal = document.querySelector('.close-modal');
const $cards = document.querySelectorAll('.card');

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    $modalOverlay.classList.add('active');

    const image = $card.getAttribute('id');
    $modalOverlay.querySelector('img').src = `/${image}`;

    // =============================== // ESSE CÓDIGO PRECISA SER REFATORADO // =============================== //
    $modalOverlay.querySelector('p').innerHTML =
      $card.querySelector('p').textContent;
    $modalOverlay.querySelector('span').innerHTML =
      $card.querySelector('span').textContent;
  });
}

$closeModal.addEventListener('click', function () {
  $modalOverlay.classList.remove('active');
});
