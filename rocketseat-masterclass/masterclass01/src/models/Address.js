const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  // address belongs to user
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id", // coluna da tabela addresses que faz o relacionamento
      as: "user"
    })
  }
}

module.exports = Address
