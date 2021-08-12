const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function removeActiveClasses(elements) {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}

function addActiveClassToEl(element) {
  element.classList.add('active');
}

function changeSliderImg(direction) {
  let currentActiveId = 0;

  const imgCircles = document.querySelectorAll('.slider-circle');

  const imgs = document.querySelectorAll('.slider-img');
  imgs.forEach((img) => {
    if (img.classList.contains('active')) {
      currentActiveId = Number(img.dataset.id);
    }
  });

  if (currentActiveId !== 0) {
    removeActiveClasses(imgs);
    removeActiveClasses(imgCircles);
  }

  switch (direction) {
    case 'next':
      if (currentActiveId >= imgs.length) {
        currentActiveId = 0;
      }
      addActiveClassToEl(document.querySelector(`img[data-id="${currentActiveId + 1}"]`));
      addActiveClassToEl(
        document.querySelector(`.slider-circle[data-id="${currentActiveId + 1}"]`)
      );
      break;
    case 'prev':
      if (currentActiveId === 1) {
        currentActiveId = 6;
      }
      addActiveClassToEl(document.querySelector(`img[data-id="${currentActiveId - 1}"]`));
      addActiveClassToEl(
        document.querySelector(`.slider-circle[data-id="${currentActiveId - 1}"]`)
      );
      break;
    default:
      break;
  }
}

nextBtn.addEventListener('click', () => {
  changeSliderImg('next');
});

prevBtn.addEventListener('click', () => {
  changeSliderImg('prev');
});
