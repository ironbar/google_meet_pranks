function getDeepFirstChild(element) {
  if (element.firstChild) {
    return getDeepFirstChild(element.firstChild);
  } else {
    return element;
  }
}

function raiseHand() {
  console.log("Raise hand");
  raise_hand_button = document.querySelector('[aria-label="Raise hand (Ctrl + alt + h)"]');
  if (raise_hand_button) {
    getDeepFirstChild(raise_hand_button).click();
    return;
  }
  raise_hand_button = document.querySelector('[aria-label="Lower hand (Ctrl + alt + h)"]');
  if (raise_hand_button) {
    getDeepFirstChild(raise_hand_button).click();
    return;
  }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let initial_delay = randomIntFromInterval(5, 10);
let delay = initial_delay;
let n_actions = 10;

for (let i = 0; i < n_actions; i++) {
  delay += randomIntFromInterval(2, 5);
  setTimeout(raiseHand, delay * 1000);
  console.log("I will raise the hand in " + delay + " seconds.");
}