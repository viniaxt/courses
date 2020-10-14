import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

// items routes
routes.get('/items', itemsController.index)

// points routes
routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)
routes.post('/points', pointsController.create)

// controller pattern: index, show, create, update, delete

export default routes