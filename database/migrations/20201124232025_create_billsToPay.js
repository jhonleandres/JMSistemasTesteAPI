exports.up = function (knex) {
    return knex.schema.createTable('billsToPay', (table) => {
        table.increments('id').primary();
        table.string('descrition').notNullable();
        table
            .integer('providerId')
            .unsigned()
            .references('id')
            .inTable('providers');
        table.decimal('price').notNullable();
        table.datetime('releaseDate').notNullable().defaultTo(knex.fn.now());
        table.datetime('dueDate').notNullable();
        table.enu('status', ['ABERTO','PAGO', 'VENCIDO']).notNullable();
        table.timestamps(false, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('billsToPay');
  };