const audio = require("./components/audio");
const imageSubmission = require("./components/imageSubmission");
const video = require("./components/video");
const image = require("./config/image");

const minify = require("./config/minify");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*.{ico,png}");

  config.addShortcode("audio", audio.custom);
  config.addNunjucksAsyncShortcode("imageSubmission", imageSubmission);
  config.addShortcode("video", video.custom);

  config.addPlugin(image.plugin);
  config.addPlugin(minify);
};
