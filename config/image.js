const eleventyImage = require("@11ty/eleventy-img");

const IMG_DIR = "_img";
const URL_PATH = "/assets/img";

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
  if (
    aspectRatio.split("/").length !== 2 ||
    aspectRatio.split("/").some((_) => isNaN(_))
  ) {
    throw new Error("invalid aspect ratio");
  }

  let options = {
    formats: ["webp", null],
    widths: [720, 1440],
    outputDir: `./${IMG_DIR}/`,
    urlPath: URL_PATH,
  };

  const stats = await eleventyImage(src, options);

  const imageHTML = eleventyImage.generateHTML(stats, {
    alt,
    sizes: "45rem", // max-width of <main> is 45rem
    loading: "lazy",
    decoding: "async",
    class: "aspect-ratio-target",
  });

  return `<div style="--aspect-ratio: ${aspectRatio}">
  ${imageHTML}
</div>`;
}

module.exports = {
  plugin,
  shortcode,
};
