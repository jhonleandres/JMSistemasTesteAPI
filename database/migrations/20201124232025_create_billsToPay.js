exports.up = function (knex) {
    return knex.schema.createTable('billsToPay', (table) => {
        table.increments();
        table.string('descrition').notNullable();
        table
            .integer('providerId')
            .references('id')
            .inTable('providers');
        table.decimal('price').notNullable();
        table.datetime('releaseDate').notNullable();
        table.datetime('dueDate').notNullable();
        table.enu('status', ['ABERTO','PAGO', 'VENCIDO']).notNullable();

        table.timestamps(false, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('billsToPay');
  };