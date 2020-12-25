const attribution = require("./attribution")
const controls = require("./controls")

function html5(url, author, title, aspectRatio = "16:9") {
  return `${attribution(author, title)}
<div class="video constrain-aspect ${aspectRatioClass(aspectRatio)}">
  <video src="${url}" controls>
    ${fallback(url)}
  </video>
</div>`
}

function custom(url, author, title, aspectRatio = "16:9") {
  return `${attribution(author, title)}
<div class="sr-video">
  <div class="video constrain-aspect ${aspectRatioClass(aspectRatio)}">
    <video src="${url}">
      ${fallback(url)}
    </video>
  </div>
  ${controls(url)}
</div>`
}
  
function aspectRatioClass(ratio) {
  const kebab = ratio.replace(":", "-")
  return `constrain-${kebab}`
}

function fallback(url) {
  return `<div class="fallback">Your browser doesn't support HTML5 video. You can <a href="${url}" target="_blank">view or download</a> this video directly.</div>`
}

module.exports = {
  html5,
  custom
}
