import express from 'express'

import path from 'path'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Route to provide static elements
 */
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

const PORT = 3333

app.listen(PORT)

/**
 * request params: parametros que vem na própria rota
 *                  que identificam um recurso
 *
 * => Geralmente são parametros obrigatórios
 */

/**
 * Query param: Parâmetros que vem na própria rota
 *              para filtros/paginação/...
 *
 * => Geralmente são parametros opcionais
 */

/**
 * Request body: Parâmetros para criação/atualização de informações
 */