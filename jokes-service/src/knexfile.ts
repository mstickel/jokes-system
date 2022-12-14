import type { Knex } from "knex";

// Update with your config settings.

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'js-postgresql',
      database: 'jokes',
      user:     'jokes',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  kdev: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      port: 32432,
      database: 'jokes',
      user:     'jokes',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
