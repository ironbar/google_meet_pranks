async function runModule(module_name){
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: [module_name],
  });
};

// () =>  is the equivalent to partial in python
document
  .getElementById("crazy_reactions")
  .addEventListener("click", () => runModule("scripts/crazy_reactions.js"));
document
  .getElementById("kick_everyone_out")
  .addEventListener("click", () => runModule("scripts/kick_everyone_out.js"));