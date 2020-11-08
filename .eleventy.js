module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("embed", embed);
  config.addShortcode("videoEmbed", videoEmbed);
};

function embed(url) {
  return `<iframe src="${url}" width="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
}

function videoEmbed(url) {
  return `<div class="video">${embed(url)}</div>`;
}
