const drums = document.getElementById("js-drums");

function playAudio(key) {
  const activeAudio = document.querySelector(`audio[data-key="${key}"]`);
  if (!activeAudio) {
    return;
  }

  activeAudio.currentTime = 0;
  activeAudio.play();
}

function pressButton(key) {
  const activeDrum = document.querySelector(`[data-key="${key}"]`);
  if (!activeDrum) {
    return;
  }
  activeDrum.classList.add("drums--play");

  activeDrum.addEventListener("transitionend", resetButtonState);
}

function processButton(event) {
  const key = event.code;
  pressButton(key);
  playAudio(key);
}

window.addEventListener("keydown", processButton);

function resetButtonState(event) {
  console.log("In reset:");
  if (event.propertyName !== "transform") {
    return;
  }

  event.target.classList.remove("drums--play");
}
