const audio = require("./components/audio");
const image = require("./components/image");
const video = require("./components/video");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("audio", audio.custom);
  config.addShortcode("image", image);
  config.addShortcode("video", video.custom);
};
