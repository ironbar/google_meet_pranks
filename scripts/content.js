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
  let button_names = [
    "Raise hand (Ctrl + alt + h)",
    "Lower hand (Ctrl + alt + h)",
    "Levantar la mano (ctrl + alt + h)",
    "Bajar la mano (ctrl + alt + h)",
  ];
  clickOnFirstAvailableButton(button_names);
}

function toggleMicrophone() {
  console.log("Toggling microphone");
  let button_names = [
    "Turn off microphone (CTRL + D)",
    "Turn on microphone (CTRL + D)",
    "Desactivar micrófono (Ctrl + D)",
    "Activar micrófono (Ctrl + D)",
    "Desactivar micrófono (Ctrl\u00A0+\u00A0D)", //\u00A0 is &nbsp;
    "Activar micrófono (Ctrl\u00A0+\u00A0D)",
  ];
  clickOnFirstAvailableButton(button_names);
}

function toggleCamera() {
  console.log("Toggling camera");
  let button_names = [
    "Turn on camera (CTRL + E)",
    "Turn off camera (CTRL + E)",
    "Desactivar cámara (Ctrl + E)",
    "Activar cámara (Ctrl + E)",
    "Desactivar cámara (Ctrl\u00A0+\u00A0E)",
    "Activar cámara (Ctrl\u00A0+\u00A0E)",
  ];
  clickOnFirstAvailableButton(button_names);
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