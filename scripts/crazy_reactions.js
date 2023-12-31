function crazyReactions() {
  function getDeepFirstChild(element) {
    if (element.firstChild) {
      return getDeepFirstChild(element.firstChild);
    } else {
      return element;
    }
  }
  const reactions_menu = document.querySelector('[aria-label="Reactions"]') || document.querySelector('[aria-label="Reacciones"]');
  let i = 0;
  for (let j = 0; j < 2; j++) {
    for (let node of reactions_menu.childNodes) {
      setTimeout(() => getDeepFirstChild(node).click(), i * 200);
      i += 1;
    }
  }
}
console.log("Crazy reactions!")
crazyReactions();