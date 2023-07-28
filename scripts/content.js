function getDeepFirstChild(element) {
  if (element.firstChild) {
    return getDeepFirstChild(element.firstChild);
  } else {
    return element;
  }
}


function clickOnFirstAvailableButton(names) {
  for (let name of names) {
    button = document.querySelector('[aria-label="' + name + '"]');
    if (button) {
      getDeepFirstChild(button).click();
      return;
    }
  }
}


function toggleHand() {
  console.log("Toggling hand");
  clickOnFirstAvailableButton(["Raise hand (Ctrl + alt + h)", "Lower hand (Ctrl + alt + h)"]);
}

function toggleMicrophone() {
  console.log("Toggling microphone");
  clickOnFirstAvailableButton(["Turn off microphone (CTRL + D)", "Turn on microphone (CTRL + D)"]);
}

function toggleCamera() {
  console.log("Toggling camera");
  clickOnFirstAvailableButton(["Turn on camera (CTRL + E)", "Turn off camera (CTRL + E)"]);
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
  var functions = [toggleHand, thumbsDown, toggleMicrophone, toggleCamera];
  var index = randomIntFromInterval(0, functions.length - 1);
  functions[index]();
}


function doRandomActionsOnGoogleMeet() {
  let initial_delay_m = randomIntFromInterval(5, 10);
  let delay_m = initial_delay_m;
  let n_actions = 100;
  for (let i = 0; i < n_actions; i++) {
    setTimeout(executeRandomFunction, delay_m * 60000);
    console.log("Next action in " + delay_m + " minutes");
    delay_m += randomIntFromInterval(1, 10);
  }
}

doRandomActionsOnGoogleMeet();