module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator

    const save = (req, res) => {
        const data = { ...req.body }
        if(req.params.id) data.id = req.params.id

        try {
            existsOrError(data.name, 'Nome do Fornecedor não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }
        if(data.id) {
            app.db('providers')
                .update(data)
                .where({ id: data.id })
                .where('active', 'Y')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('providers')
                .insert(data)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }
    const get = async (req, res) => {
        app.db('providers')
            .select()
            .then(providers => res.json(providers))
            .catch(err => res.status(500).send(err))   
    }
    const getById = (req, res) => {
        app.db('providers')
            .select()
            .where({id: data.id})
            .then(provider => res.json(provider))
            .catch(err => res.status(500).send(err)) 
    }
    return {save, get, getById}
}