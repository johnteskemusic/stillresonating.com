const audio = require("./components/audio");
const imageSubmission = require("./components/imageSubmission");
const video = require("./components/video");
const image = require("./config/image");
const attribution = require("./components/attribution");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("attribution", attribution);
  config.addShortcode("audio", audio.custom);
  config.addNunjucksAsyncShortcode("imageSubmission", imageSubmission);
  config.addShortcode("video", video.custom);

  config.addPlugin(image.plugin);
};
