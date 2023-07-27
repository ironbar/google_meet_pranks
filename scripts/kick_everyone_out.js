function kick_everyone_out(){
  let timeout = 0;
  people = document.querySelectorAll('[aria-label="More actions"]');
  // loop over all the people excluding the first one
  for (let i = 1; i < people.length; i++) {
    setTimeout(() => people[i].click(), timeout);
    timeout += 200;
    setTimeout(() => document.querySelector('[aria-label="Remove from the call"]').click(), timeout);
    timeout += 400;
    setTimeout(() => document.querySelector('[aria-label="Remove"]').click(), timeout);
    timeout += 400;
  }
}
kick_everyone_out();

