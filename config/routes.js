
module.exports = app => {
    app.route('/billstopay')
        .post(app.api.ContasPagarController.save)
        .get(app.api.ContasPagarController.get)
        .get(app.api.ContasPagarController.getById)
        
}