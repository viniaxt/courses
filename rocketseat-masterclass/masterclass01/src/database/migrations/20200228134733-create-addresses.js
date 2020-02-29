'use strict';

/**
 *  Se no método up for criada uma tabela, no método down
 * essa tabela terá que ser deletada
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        /**
         * o que vai acontecer com o valor de user_id 
         * caso o campo id da tabela users mude 
        */
        onUpdate: 'CASCADE', // troca o campo pro campo novo
        onDelete: 'CASCADE', // se o user for deletado, deleta os endereços dele
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      // created_at e updated_at salvam em UTC
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};
