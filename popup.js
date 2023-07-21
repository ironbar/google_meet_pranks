// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// "use strict";

function storePrankMode(prank_mode) {
  chrome.storage.sync.set({ prank_mode: prank_mode });
  window.close();
}


function prankMode() {
  function getDeepFirstChild(element) {
    if (element.firstChild) {
      return getDeepFirstChild(element.firstChild);
    } else {
      return element;
    }
  }
  const reactions_menu = document.querySelector('[aria-label="Reactions"]');
  getDeepFirstChild(reactions_menu.childNodes[0]).click();

  let i = 0;
  for (let j = 0; j < 2; j++) {
    for (let node of reactions_menu.childNodes) {
      setTimeout(() => getDeepFirstChild(node).click(), i * 200);
      i += 1;
    }
  }
}

runPrank = async () => {
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  if (tab.url.startsWith("https://meet.google.com/")) {
    // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === "ON" ? "OFF" : "ON";

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON") {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: prankMode,
      });
    } else if (nextState === "OFF") {
    }
  }
};

//bind is the equivalent to partial in python
// document.getElementById("crazy_reactions").addEventListener("click", storePrankMode.bind("crazy_reactions"));
document.getElementById("crazy_reactions").addEventListener("click", runPrank);
document.getElementById("kick_everyone_out").addEventListener("click", storePrankMode.bind("kick_everyone_out"));