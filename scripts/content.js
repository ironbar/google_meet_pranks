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

function thumbsDown() {
    console.log("Thumbs down");
    reactions_menu = document.querySelector('[aria-label="Reactions"]');
    if (reactions_menu) {
        getDeepFirstChild(reactions_menu.childNodes[8]).click();
        return;
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function executeRandomFunction(functions) {
  var functions = [raiseHand, thumbsDown];
  var index = randomIntFromInterval(0, functions.length - 1);
  functions[index]();
}



let initial_delay = randomIntFromInterval(1, 3);
let delay = initial_delay;
let n_actions = 10;

for (let i = 0; i < n_actions; i++) {
  delay += randomIntFromInterval(1, 3);
  setTimeout(
    executeRandomFunction,
    delay * 1000
  );
  console.log("I will raise the hand in " + delay + " seconds.");
}