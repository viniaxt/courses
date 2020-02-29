module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'postgres',
  database: 'sqlnode',
  define: {
    timestamps: true, // created_at, updated_at
    underscored: true, // nome das tabelas e colunas no formato snake case (tabela_de_dados)
  }
}