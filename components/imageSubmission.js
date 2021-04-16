const attribution = require("./attribution")
const image = require("../config/image")

module.exports = async function(url, author, title) {
  return `${attribution(author, title)}
${await image.shortcode(url, `'${title}' by ${author}`)}`
}
