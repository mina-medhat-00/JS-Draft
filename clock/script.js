const $secondsHand = document.querySelector(".seconds");
const $minutesHand = document.querySelector(".minutes");
const $hoursHand = document.querySelector(".hours");

setInterval(() => {
  const d = new Date();
  $secondsHand.style.transform = `rotate(${d.getSeconds() * 6}deg)`;
  $minutesHand.style.transform = `rotate(${d.getMinutes() * 6}deg)`;
  $hoursHand.style.transform = `rotate(${(d.getHours() % 12) * 30}deg)`;
}, 1000);
