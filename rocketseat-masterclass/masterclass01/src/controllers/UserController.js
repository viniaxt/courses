const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const users = await User.findAll()

    return res.json(users)
  },
  async store(req, res) {
    // recebemos name e email pelo corpo da requisição
    const { name, email } = req.body

    // criamos um novo registro na tabela (ou um novo usuario)
    const user = await User.create({ name, email })

    // retornamos em formato de json todos os dados do usuario criado
    return res.json(user)
  }
}