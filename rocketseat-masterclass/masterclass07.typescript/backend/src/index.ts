import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())
app.use(routes)

console.log("Server is running on port 3333")
app.listen(3333)