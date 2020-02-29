// Arquivo onde iremos fazer a conexão com o banco de dados
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Tech = require('../models/Tech')
const User = require('../models/User')
const Address = require('../models/Address')

const connection = new Sequelize(dbConfig)

// npm consign => automatizar a importação dos models
Tech.init(connection)
User.init(connection)
Address.init(connection)

Tech.associate(connection.models)
User.associate(connection.models)
Address.associate(connection.models)

module.exports = connection