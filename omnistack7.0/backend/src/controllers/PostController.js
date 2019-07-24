const Post = require("../models/Post")
const sharp = require("sharp")
const path = require("path")
const fs = require("fs")

module.exports = {
  async index(req, res) {
    // returns list of posts that are already in db

    const posts = await Post.find().sort("-createdAt")
    return res.json(posts)
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body
    const { filename: image } = req.file

    const [name, ext] = image.split(".")

    const fileName = `${name}.jpg`

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", image))

    fs.unlinkSync(req.file.path) //delete image that is outside resized folder

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName
    })

    req.io.emit("post", post)

    return res.json(post)
  }
}
