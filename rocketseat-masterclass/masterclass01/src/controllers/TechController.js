const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: {
        association: 'techs',
        attributes: ["name"], // retorna apenas name
        through: {
          // retorna apenas user_id ta tabela relacionada
          attributes: ["user_id"]
        }
      }
    })

    if (!user) {
      return res.status(400).json({ error: "usuário não encontrado" })
    }

    return res.json(user.techs)
  },
  async store(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: "usuário não encontrado" })
    }

    // esse método procura a tecnologia e, se não existir, criar no banco
    // note que o retorno é [tech, created (boolean)] (duas informações)
    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    // adicionamos o campo na tabela que faz o relacionamento entre techs e users
    // https://sequelize.org/v5/manual/associations.html#belongs-to-many-associations
    await user.addTech(tech)

    return res.json(tech)
  },

  async delete(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: "usuário não encontrado" })
    }

    const tech = await Tech.findOne({
      where: { name }
    })

    // remove o relacionamento na tabela user_techs
    await user.removeTech(tech)

    return res.json(tech)
  }
}