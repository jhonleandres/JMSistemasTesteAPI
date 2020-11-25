
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('billsToPay').del()
    .then(function () {
      // Inserts seed entries
      return knex('billsToPay').insert([
        {
          id: 1, 
          descrition: 'Pagamento Conta de Agua', 
          providerId: 1, 
          price: 240.00, 
          releaseDate: '2020/11/25',
          dueDate: '2020/11/27',
          status: 'PAGO'
        },
        {
          id: 2, 
          descrition: 'Pagamento Conta de Energia', 
          providerId: 2, 
          price: 500.49, 
          releaseDate: '2020/11/20',
          dueDate: '2020/11/19',
          status: 'VENCIDO'
        },
        {
          id: 3, 
          descrition: 'Pagamento Conta de Supermercado', 
          providerId: 3, 
          price: 999.00, 
          releaseDate: '2020/11/21',
          dueDate: '2020/11/30',
          status: 'ABERTO'
        }

      ]);
    });
};
