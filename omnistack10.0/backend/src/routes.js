const { Router } = require("express")
const DevController = require('./Controllers/DevController')
const SearchController = require('./Controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes

// Query params: req.query (filtros, ordenação, paginação)
// Route params: req.params (identficar um recuso na alteração du remoção)
// Body: req.body (Dados para criação ou alteração de um registro)