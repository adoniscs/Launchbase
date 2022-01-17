const $cards = document.querySelectorAll('.card');

const $btnIngredients = document.querySelector('#btnIngredients');
const $btnPreparation = document.querySelector('#btnPreparation');
const $btnInformation = document.querySelector('#btnInformation');

const $recipeIngredient = document.querySelector('.recipe__ingredients-items');
const $recipePreparation = document.querySelector('.recipe__preparation-items');
const $recipeInformation = document.querySelector(
  '.recipe__information-paragraph'
);

for (let $card of $cards) {
  $card.addEventListener('click', function () {
    const recipeId = $card.getAttribute('id');

    window.location.href = `/recipe/${recipeId}`;
  });
}

$btnIngredients.addEventListener('click', function () {
  if ($btnIngredients.innerHTML === 'esconder') {
    $recipeIngredient.classList.add('hiden');
    $btnIngredients.innerHTML = 'mostrar';
  } else {
    $recipeIngredient.classList.remove('hiden');
    $btnIngredients.innerHTML = 'esconder';
  }
});

$btnPreparation.addEventListener('click', function () {
  if ($btnPreparation.innerHTML === 'esconder') {
    $recipePreparation.classList.add('hiden');
    $btnPreparation.innerHTML = 'mostrar';
  } else {
    $recipePreparation.classList.remove('hiden');
    $btnPreparation.innerHTML = 'esconder';
  }
});

$btnInformation.addEventListener('click', function () {
  if ($btnInformation.innerHTML === 'esconder') {
    $recipeInformation.classList.add('hiden');
    $btnInformation.innerHTML = 'mostrar';
  } else {
    $recipeInformation.classList.remove('hiden');
    $btnInformation.innerHTML = 'esconder';
  }
});
