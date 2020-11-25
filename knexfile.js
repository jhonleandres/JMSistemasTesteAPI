const {db} = require('./.env')
const { FsMigrations } = require('knex/lib/migrate/sources/fs-migrations')

module.exports = {
    development: {
      client: 'mysql2',
      connection: db,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: "./database/migrations",
        extension: "js"
      },
      seeds: {
        directory: './database/seeds',
        extension: 'js'
      }
    },
    production: {
      client: 'mysql2',
      connection: db,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './database/migrations',
        extension: 'js'
      },
      seeds: {
        directory: './database/seeds',
        extension: 'js'
      }
    }
};
