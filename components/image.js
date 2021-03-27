const attribution = require("./attribution")

module.exports = function(url, author, title) {
  return `${attribution(author, title)}
<div class="constrain-aspect">
  <img
    src="${url}"
    loading="lazy"
    alt="'${title}' by ${author}"
  />
</div>`
}
