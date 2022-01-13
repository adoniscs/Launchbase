const $modalOverlay = document.querySelector('.modal-overlay')
const $cards = document.querySelectorAll('.card')
const $closeModal = document.querySelector('.material-icons')

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    $modalOverlay.classList.add('active')
  })
}

$closeModal.addEventListener('click', function () {
  $modalOverlay.classList.remove('active')
})
