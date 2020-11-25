
module.exports = app => {
    
    app.route('/provider')
        .post(app.api.FornecedorController.save)
        .get(app.api.FornecedorController.get)
        .get(app.api.FornecedorController.getById)
        
    app.route('/provider/:id')
        .get(app.api.FornecedorController.getById)

    app.route('/billstopay')
        .post(app.api.ContasPagarController.save)
        .get(app.api.ContasPagarController.get)
        .get(app.api.ContasPagarController.getById)
        .get(app.api.ContasPagarController.getFilterType)

    app.route('/billstopay/:id')
        .get(app.api.ContasPagarController.getById)
        
}