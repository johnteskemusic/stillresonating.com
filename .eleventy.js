const audio = require("./components/audio");
const image = require("./components/image");
const video = require("./components/video");

const minify = require("./config/minify");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*.{ico,png}");

  config.addShortcode("audio", audio.custom);
  config.addShortcode("image", image);
  config.addShortcode("video", video.custom);

  config.addPlugin(minify);
};
