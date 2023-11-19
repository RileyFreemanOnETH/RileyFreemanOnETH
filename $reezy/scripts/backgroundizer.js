document.addEventListener("DOMContentLoaded", function () {
  const comingSoon = document.querySelector(".coming-soon");
  const gifs = [
    "./images/1.gif",
    "./images/2.gif",
    "./images/3.gif",
    "./images/4.gif",
    "./images/5.gif",
  ];
  let currentGif = 0;

  function changeBackground() {
    comingSoon.style.backgroundImage = `url('${gifs[currentGif]}')`;
    currentGif = (currentGif + 1) % gifs.length;
  }

  // Set initial background
  changeBackground();

  // Change background every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 800);
});
