
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {id: 1, name: 'Saneago'},
        {id: 2, name: 'Enel Goiás'},
        {id: 3, name: 'Braga Supermercado'}
      ]);
    });
};
