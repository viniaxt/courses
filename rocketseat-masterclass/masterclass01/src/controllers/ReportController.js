const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
  async show(req, res) {
    // encontrar todos usuários que tem email que termona ocm @rocketseat.com.br
    // Desses usuaruos queremos buscar todos que moram na rua "Rua Guilherme Gembala"
    // Desses usuários queremos buscar todas as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ["name", "email"],
      // operators: https://sequelize.org/v5/manual/querying.html#operators
      where: {
        email: {
          [Op.iLike]: "%@rocketseat.com.br"
        }
      },
      include: [
        { // endereços
          association: "addresses",
          where: {
            street: "Rua Guilherme Gembala"
          }
        },
        { // tecnologias
          association: "techs",
          required: false, // LEFT OUTER JOIN
          where: {
            name: {
              [Op.iLike]: "React%"
            }
          }
        }
      ]
    })

    return res.json(users)
  }
}