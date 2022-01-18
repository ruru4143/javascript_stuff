// ==UserScript==
// @name     better tutube series title
// @version  1
// @grant    none
// @run-at 	 document-end
// @match    https://tube.tugraz.at/paella/ui/browse.html?series=*
// @require  https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// ==/UserScript==

function change_title () {
  document.title = "Browse - " + document.querySelector("div#int-menu-title").textContent;
}

waitForKeyElements (() => {
  const title = document.querySelectorAll("div#int-menu-title");
  if (title[0].textContent.length > 0)
  {
      return title; // just return any element to make waitForKeyElements happy
  }
  return null;
}, change_title);

