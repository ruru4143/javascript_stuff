// ==UserScript==
// @name     better tutube title
// @version  1
// @grant    none
// @run-at 	 document-end
// @match    https://tube.tugraz.at/paella/ui/watch.html?id=*
// @require  https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// ==/UserScript==

function change_title () {
  document.title = document.querySelector("div#int-menu-title").textContent;
  document.title += " - " + document.querySelector("a#series-breadcrumb").textContent;
}

waitForKeyElements (() => {
  const title = document.querySelectorAll("div#int-menu-title")
  const serie_title = document.querySelectorAll("a#series-breadcrumb")
  if (title[0].textContent.length > 0 &&
     serie_title[0].textContent.length > 0)
  {
    return title; // just return any element to make waitForKeyElements happy
  }
  return null;
}, change_title);

