function kick_everyone_out(){
  let timeout = 0;
  people = document.querySelectorAll('[aria-label="More actions"]');
  if (people.length > 0) {
    // loop over all the people excluding the first one
    for (let i = 1; i < people.length; i++) {
        setTimeout(() => people[i].click(), timeout);
        timeout += 200;
        setTimeout(() => document.querySelector('[aria-label="Remove from the call"]').click(), timeout);
        timeout += 400;
        setTimeout(() => document.querySelector('[aria-label="Remove"]').click(), timeout);
        timeout += 400;
    }
    return;
  }
  people = document.querySelectorAll('[aria-label="Más acciones"]');
  if (people.length > 0) {
    // loop over all the people excluding the first one
    for (let i = 1; i < people.length; i++) {
      setTimeout(() => people[i].click(), timeout);
      timeout += 200;
      setTimeout(
        () =>
          document.querySelector('[aria-label="Quitar de la llamada"]').click(),
        timeout
      );
      timeout += 400;
      setTimeout(
        () => document.querySelector('[aria-label="Quitar"]').click(),
        timeout
      );
      timeout += 400;
    }
    return;
  }
}
console.log("Going to kick everyone out!")
kick_everyone_out();

