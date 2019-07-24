const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")

const app = express() // creates kind of a 'server'

const server = require("http").Server(app)
const io = require("socket.io")(server)

mongoose.connect(
  "mongodb+srv://dbomni:dbomni@cluster0-iyhjg.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
)

app.use((req, res, next) => {
  req.io = io

  next()
})

app.use(cors())

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
)

/**
 * middleware is an interceptor of requisitions
 * req: requisition
 * res: answer
 * http://localhost:3333?name=Vinicius
 */

app.use(require("./routes"))

server.listen(3333) // port
