const id = (i = 0) => (() => i++)()

module.exports = function (config) {
  config.addPassthroughCopy("assets/*");
  config.addPassthroughCopy("favicon.ico");

  config.addShortcode("audio", audio);
  config.addShortcode("audio2", audio2);
  config.addShortcode("video", video);
};

function attribution(author, title) {
  return title != null ? `<h4>${title}</h4>` : ""
}

function audio(url, author, title) {
  return `${attribution(author, title)}
<audio src="${url}"
  controls>
    <div class="fallback">Your browser doesn't support HTML5 audio. You can <a href="${url}" target="_blank">listen to or download</a> this file directly.</div>
</audio>
`
}

function audio2(url, author, title) {
  return `${attribution(author, title)}
<div class="sr-audio">
<audio src="${url}">
    <div class="fallback">Your browser doesn't support HTML5 audio. You can <a href="${url}" target="_blank">listen to or download</a> this file directly.</div>
</audio>
<div class="progress">
<div class="bar buffer-bar"></div>
<div class="bar progress-bar"></div>
</div>
<div class="controls">
<span class="status">loading</span>
<button class="play">play</button>
<button class="pause">pause</button>
<a href="${url}">download</a>
</div>
</div>
`
}

function video(url, author, title) {
  return `${attribution(author, title)}
<div class="video">
  <video src="${url}" controls>
    <div class="fallback">Your browser doesn't support HTML5 video. You can <a href="${url}" target="_blank">view or download</a> this video directly.</div>
  </video>
</div>`
}
