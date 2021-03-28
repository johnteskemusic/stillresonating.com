const eleventyImage = require("@11ty/eleventy-img");

const IMG_DIR = "_img"
const URL_PATH = "/assets/img"

function plugin(config) {

config.setBrowserSyncConfig({
    server: {
      baseDir: "_site",
      routes: {
        "/assets/img": IMG_DIR, // serve images locally
      },
    },
  });

  config.addNunjucksAsyncShortcode("img", shortcode);
}

async function shortcode(src, alt, aspectRatio = "16/9") {
    if (aspectRatio.split("/").length !== 2) {
      // TODO also check each of these are numbers
      throw new Error("invalid aspect ratio")
    }

    let options = {
      formats: [/*"webp"*/, null], // TODO webp format and also original // TODO also allow webp, which require CSS changes to support <picture>
      widths: [720, 1440], // 1x, 2x
      outputDir: `./${IMG_DIR}/`,
      urlPath: URL_PATH,
    };

    const stats = await eleventyImage(src, options);

    // TODO should every image have this included?
    // <div style="--aspect-ratio: 3/2">
    // TODO use custom markup to specify 1x, 2x?
    //return `<img src="${stats.jpeg[0].url}" srcset="${stats.jpeg.map((s, i) => `${s.url} ${i + 1}x`)}" />`
    const imageHTML = eleventyImage.generateHTML(stats, {
      alt,
      sizes: "100vw", // sizes || "(min-width: 22em) 30vw, 100vw", // TODO what does this do
      loading: "lazy",
      decoding: "async",
    });

    return `<div style="--aspect-ratio: ${aspectRatio}">
  ${imageHTML}
</div>`
  }

module.exports = {
  plugin, shortcode }
