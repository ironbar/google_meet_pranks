document.querySelectorAll('[aria-label="More actions"]')[1].click();
setTimeout(() => document.querySelector('[aria-label="Remove from the call"]').click(), 200);
setTimeout(
  () =>
    document.querySelector('[aria-label="Remove"]').click(),
  600
);
