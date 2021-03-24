const audio = require("./components/audio");
const image = require("./components/image");
const video = require("./components/video");

module.exports = function (config) {
  config.addPassthroughCopy("assets/*");

  config.addShortcode("audio", audio.custom);
  config.addShortcode("image", image);
  config.addShortcode("video", video.custom);

  // if feature.deferImages--although now this is a transform, is that needed?
  // and if I consider this a plugin, how is it used in my main js script?
  config.addTransform("deferImages", function(content, outputPath) {
    if (!outputPath.endsWith("html")) {
      return content
    }
    return content.replaceAll("img src", "img data-src");
  })
};
