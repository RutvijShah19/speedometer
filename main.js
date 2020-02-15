const randomSpeedGenerator = () => {
  return Math.floor(Math.random() * 180);
}

const rotationDegree = () => {
  const randomNumber = randomSpeedGenerator();
  const degree = randomNumber + 280;

  // Display Speed in speedometer
  showSpeed(degree);

  // Display different color on the base of threshold
  changeBackground(randomNumber);
}

const showSpeed = (degree) => {
  const dial = document.getElementsByClassName('dial');

  dial[0].style.webkitTransform = 'rotateZ('+ degree +'deg)';
  dial[0].style.transform = 'rotateZ('+ degree +'deg)';
}

const changeBackground = (speed) => {
  const meterContainer = document.getElementsByClassName('meter');

  if(speed >= 0 && speed <= 60) {
    meterContainer[0].style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
  } else if(speed >= 61 && speed <= 120) {
    meterContainer[0].style.backgroundColor = 'rgba(255, 165, 0, 0.2)';
  } else {
    meterContainer[0].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
  }
}

// Random number is genarated and display speed on every 4 seconds
let intervalSpeedGenerator = setInterval(rotationDegree, 4000);
