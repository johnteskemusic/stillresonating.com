const audio = require("./components/audio");
const imageSubmission = require("./components/image");
const video = require("./components/video");
const image = require("./config/image");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("audio", audio.custom);
  config.addShortcode("imageSubmission", imageSubmission);
  config.addShortcode("video", video.custom);

  config.addPlugin(image);
};
