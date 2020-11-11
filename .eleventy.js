module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("embed", embed);
  config.addShortcode("videoEmbed", videoEmbed);

  config.addShortcode("video", video);
};

function embed(url) {
  return `<iframe src="${url}" width="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
}

function videoEmbed(url) {
  return `<div class="video">${embed(url)}</div>`;
}

function attribution(author, title) {
  return `<h3>${author}${title != null ? ": " + title : ""}</h3>`
}

function video(url, author, title) {
  return `${attribution(author, title)}
<div class="video">
  <video src="${url}" controls>
    <div class="fallback">Your browser doesn't support HTML5 video. You can <a href="${url}" target="_blank">view or download</a> this video directly.</div>
  </video>
</div>`
}
