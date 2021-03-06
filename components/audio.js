const attribution = require("./attribution");
const controls = require("./controls");

function html5(url, author, title) {
  return `${attribution(author, title)}
<audio src="${url}" controls preload="metadata">
  ${fallback(url)}
</audio>`;
}

function custom(url, author, title) {
  return `${attribution(author, title)}
<div class="sr-audio">
  <audio src="${url}" preload="metadata">
    ${fallback(url)}
  </audio>
  ${controls(url)}
</div>`;
}

function fallback(url) {
  return `<div class="fallback">Your browser doesn't support HTML5 audio. You can <a href="${url}" target="_blank" rel="noopener">listen to or download</a> this file directly.</div>`;
}

module.exports = {
  html5,
  custom,
};
