// ==UserScript==
// @name     bs.to rewrite
// @version  1
// @grant    none
// @run-at   document-end
// @match    https://bs.to/*
// ==/UserScript==


var favorite_provider_list = ["Vivo", "Streamtape"]

var avalible_hosts = document.getElementsByClassName("hoster-tabs top")[0].getElementsByTagName("li"); // get hosts

// extract strings
var avalible_hosts_strings = [];
for (var i = 0; i < avalible_hosts.length; ++i) {
  avalible_hosts_strings.push(avalible_hosts[i].textContent.replace(/\s+/g, ''));
}

// find possible host in url
var url = String(document.location);
var last_bit = url.split("/")[url.split("/").length-1];



if (!avalible_hosts_strings.includes(last_bit)) { // not includes
  var found_preferred_host = false;

  for (var i = 0; i < avalible_hosts_strings.length; ++i) {
    var option = avalible_hosts_strings[i];

    if (favorite_provider_list.includes(option)) {
      document.location = document.location + "/" + option;
      found_preferred_host = true;
    }
  }
  if (!found_preferred_host) {
    var first_option = avalible_hosts_strings[0].textContent.replace(/\s+/g, '');
    content.document.location = content.document.location + "/" + first_option;
  }
}

