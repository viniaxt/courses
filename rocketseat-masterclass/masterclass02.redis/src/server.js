import express from 'express'
import UserController from './app/controllers/UserController'

/**
 * https://www.youtube.com/watch?v=uonKHztGhko&list=PL85ITvJ7FLoiNndfuEs2So-MFLSMvBmmD&index=10
 * tempo: 9:40
 */

const app = express()

app.use(express.json())

app.post('/users', UserController.store)

app.listen(3333, () => {
  console.log('server running on localhost:3333')
})