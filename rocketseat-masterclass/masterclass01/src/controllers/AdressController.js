const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params

    // segundo parametro é include (para relacionamento)
    // inner join com a tabela addresses pelo fato de termos 
    // colocado static associate no models/User.js
    const user = await User.findByPk(user_id, {
      include: {
        association: "addresses"
      }
    })

    res.send(user.addresses)
  },

  async store(req, res) {
    // sempre que for criar um endereço, é necessario ter um usuario
    const { user_id } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id
    })

    return res.json(address)
  }
}