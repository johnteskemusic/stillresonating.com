const eleventyImage = require("@11ty/eleventy-img");

const IMG_DIR = "_img"
const URL_PATH = "/assets/img"

module.exports = config => {

config.setBrowserSyncConfig({
    server: {
      baseDir: "_site",
      routes: {
        "/assets/img": IMG_DIR, // serve images locally
      },
    },
  });

  config.addNunjucksAsyncShortcode("img", async (src, alt) => {
    let options = {
      formats: ["jpeg"],
      widths: [720, 1440, null], // 1x, 2x, original
      outputDir: `./${IMG_DIR}/`,
      urlPath: URL_PATH,
    };

    let stats = await eleventyImage(src, options);

    return eleventyImage.generateHTML(stats, {
      alt,
      sizes: "100vw", // sizes || "(min-width: 22em) 30vw, 100vw", // TODO what does this do
      loading: "lazy",
      decoding: "async",
    });
  });
}
