MongoDB 
  -> Schema free: sua estrutura pode ser alterada em tempo de vida da aplicação
  -> Na mesma tabela, um registro pode ter user e outro não
  -> Não é feito para ter relacionamentos

SQL
  -> Migrations: "Controle de versão" do seu banco
  -> Banco relacional
  -> Banco recomendado: PostgresSQL

- Não faz sentido usar banco noSQL na maioria das aplicações

- Há a possibilidade de extrair certos campos para bancos noSQL - geralmente mais performático se utilizado corretamente

Níveis de abstração: forma de se comunicar com o banco
  -> 1°: Driver nativo - escrever as queries (node-postgres.com)
  -> 2º: Query builder (knexjs.org)
    Ex.: knex('books').insert({ title: "Slaughterhouse"})
  -> 3°: ORM (sequelize.org)
    - Definimos um model que define como vai ser a comunicação a nossa aplicação com o banco de dados

Etapas no terminal
  > yarn add express pg pg-hstore sequelize

  > yarn add sequelize-cli -D

Criamos o banco de dados definido em src/config/database.js
  > yarn sequelize db:create

Criamos a primeira Migration (que é uma tabela)
  > yarn sequelize migration:create --name=create-users

  > yarn sequelize db:migrate

Desfazer tudo que foi executado na ultima migration (apenas no seu próprio ambiente de desenvolvimento)
  > yarn sequelize db:migrate:undo

Nota: Para arrumar um erro em produção, deve ser feita uma migration nova

---- MODEL

-> model: é uma representação de como a nossa aplicação vai se comunicar com a base de dados
