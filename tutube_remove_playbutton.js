// ==UserScript==
// @name     remove play button tutube
// @version  1
// @grant    none
// @run-at 	 document-end
// @match    https://tube.tugraz.at/paella/ui/watch.html?id=*
// @require  https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// ==/UserScript==


function remove_button () {
  var iframe = document.querySelector('iframe#video-frame');
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.querySelectorAll("div.play-icon")[0].remove();
}

waitForKeyElements(() => {
  const iframe = document.querySelector('iframe#video-frame');
  if (iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    return iframeDoc.querySelectorAll("div.play-icon");
  }
  return null;
}, remove_button);

