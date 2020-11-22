const audio = require("./components/audio");
const video = require("./components/video");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("audio", audio.custom);
  config.addShortcode("video", video.custom);
};
