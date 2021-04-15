const htmlmin = require("html-minifier");

module.exports = function (config) {
  config.addTransform("htmlmin", function (content, outputPath) {
    if (process.env.SITE_ENV === "production" && outputPath.endsWith("html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });
};
