const attribution = require("./attribution")
const image = require("../config/image")

// TODO this could be a njk?
module.exports = async function(url, author, title) {
  return `${attribution(author, title)}
${await image.shortcode(url, `'${title}' by ${author}`)}`
}
