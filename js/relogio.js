const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
};

const setClock = () => {
    const currenDate = new Date();
    const secondsPercentage = (currenDate.getSeconds() / 60);
    const minutesPercentage = (secondsPercentage + currenDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currenDate.getHours()) / 12;

    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);