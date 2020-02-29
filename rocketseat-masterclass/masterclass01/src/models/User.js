const { Model, DataTypes } = require('sequelize')

class User extends Model {
  /**
   * método padrão do sequelize que recebe
   * a conexão como parametro 
  */
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      /**
       * note que não precisamos inportar as colunas
       * created_at e updated_at pois configuramos timestamps
       *  */
    }, {
      sequelize
    })
  }

  // user has many addresses
  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: "user_id", // coluna da tabela addresses que faz o relacionamento
      as: "addresses"
    })

    this.belongsToMany(models.Tech, {
      foreignKey: "user_id",
      through: "user_techs",
      as: "techs" // quais são as techs desse usuário
    })
  }
}

module.exports = User
