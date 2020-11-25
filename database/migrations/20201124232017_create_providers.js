exports.up = function (knex) {
    return knex.schema.createTable('providers', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.timestamps(false, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('providers');
  };