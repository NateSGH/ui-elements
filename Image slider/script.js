const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const circles = document.querySelectorAll('.slider-circle');

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

let setNextSlideByTimeout = setInterval(() => {
  changeSliderImg('next');
}, 5000);

function restartSetNextSlideByTimeout() {
  clearInterval(setNextSlideByTimeout);
  setNextSlideByTimeout = setInterval(() => {
    changeSliderImg('next');
  }, 5000);
}

circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    restartSetNextSlideByTimeout();
    removeActiveClasses(document.querySelectorAll('.slider-img'));
    removeActiveClasses(circles);
    addActiveClassToEl(document.querySelector(`img[data-id="${Number(circle.dataset.id)}"]`));
    addActiveClassToEl(circle);
  });
});

nextBtn.addEventListener('click', () => {
  restartSetNextSlideByTimeout();
  changeSliderImg('next');
});

prevBtn.addEventListener('click', () => {
  restartSetNextSlideByTimeout();
  changeSliderImg('prev');
});
