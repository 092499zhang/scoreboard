const addOne = document.querySelectorAll('.add-one');
const addTwo = document.querySelectorAll('.add-two');
const addThree = document.querySelectorAll('.add-three');
const homeScore = document.querySelector('.home-score');
const guestScore = document.querySelector('.guest-score');

addOne.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      homeScore.textContent = parseInt(homeScore.textContent) + 1;
    } else {
      guestScore.textContent = parseInt(guestScore.textContent) + 1;
    }
  });
});

// +2 按钮
addTwo.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      homeScore.textContent = parseInt(homeScore.textContent) + 2;
    } else {
      guestScore.textContent = parseInt(guestScore.textContent) + 2;
    }
  });
});

// +3 按钮
addThree.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      homeScore.textContent = parseInt(homeScore.textContent) + 3;
    } else {
      guestScore.textContent = parseInt(guestScore.textContent) + 3;
    }
  });
});


