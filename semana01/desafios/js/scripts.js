const $modalOverlay = document.querySelector('.modal-overlay')
const $modal = document.querySelector('.modal')
const $cards = document.querySelectorAll('.card')
const $buttonCloseModal = document.querySelector('.close-modal')
const $buttonOpenFullModal = document.querySelector('.maximize')

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    const postId = $card.getAttribute('id')

    $modalOverlay.classList.add('active')
    $modalOverlay.querySelector(
      'iframe'
    ).src = `https://blog.rocketseat.com.br/${postId}`
  })
}

$buttonCloseModal.addEventListener('click', function () {
  $modalOverlay.classList.remove('active')
  $modal.classList.remove('maximize')
})

$buttonOpenFullModal.addEventListener('click', function() {
  $modal.classList.add('maximize')
  alert($modal.classList.contains('maximize'))
})