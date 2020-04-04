const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(request, response) {
    // Buscar todos os devs num determinado raio
    // filtrar por tecnologias

    const { latitude, longitude, techs } = request.query

    const techsArray = parseStringAsArray(techs)

    // mongo operators ($in, $eq, ...)
    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    })
    return response.json({ devs })
  }
}