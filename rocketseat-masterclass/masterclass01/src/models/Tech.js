const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'techs' // erro com pluralização
    })
  }

  // Techs belongs to many users
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "tech_id",
      through: "user_techs", // nome da tabela que vai relacionar users com techs
      as: "users"
    })

  }
}

module.exports = Tech
