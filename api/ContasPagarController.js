module.exports = app =>{
    const { existsOrError } = app.api.validator

    const save = (req, res) => {
        const data = { ...req.body }
        if(req.params.id) data.id = req.params.id

        try {
            existsOrError(data.descrition, 'Decrição contas a pagar não informado')
            existsOrError(data.providerId, 'ID do fornecedor não informado')
            existsOrError(data.price, 'Valor não informado')
            existsOrError(data.dueDate, 'ID usuário não informado')
            existsOrError(data.status, 'ID usuário não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }
        if(data.id) {
            app.db('billsToPay')
                .update(data)
                .where({ id: data.id })
                .where('active', 'Y')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('billsToPay')
                .insert(data)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }
    const get = async (req, res) => {
        app.db('billsToPay as b')
            .join('providers as f', 'f.id', 'b.providerId')
            .select('f.id as IdFor', 'f.name as fornecedor', 'b.*')
            .then(billsToPay => res.json(billsToPay))
            .catch(err => res.status(500).send(err))   
    }
    const getById = (req, res) => {
        app.db('billsToPay as b')
            .join('providers as f', 'f.id', 'b.providerId')
            .select('f.id as IdFor', 'f.name as fornecedor', 'b.*')
            .where({id: data.id})
            .then(billsToPay => res.json(billsToPay))
            .catch(err => res.status(500).send(err)) 
    }


    const getFilterType = (req, res) => {
        const data = { ...req.body }
        const {status, antes, depois, } = data
        switch (data.type) {
            case 'STATUS':
                app.db('billsToPay as b')
                    .join('providers as f', 'f.id', 'b.providerId')
                    .select('f.id as IdFor', 'f.name as fornecedor', 'b.*')
                    .where(status)
                    .then(status => res.json(status))
                    .catch(err => res.status(500).send(err)) 
                break;
            case 'PERIODO':
                app.db('billsToPay as b')
                    .join('providers as f', 'f.id', 'b.providerId')
                    .select('f.id as IdFor', 'f.name as fornecedor', 'b.*')
                    .whereBetween('created_at', [antes, depois])
                    .then(periodo => res.json(periodo))
                    .catch(err => res.status(500).send(err)) 
                break;
            case 'FORNECEDOR':
                app.db('billsToPay as b')
                    .join('providers as f', 'f.id', 'b.providerId')
                    .select('f.id as IdFor', 'f.name as fornecedor', 'b.*')
                    .where({id: data.id})
                    .then(fornecedor => res.json(fornecedor))
                    .catch(err => res.status(500).send(err)) 
                break;

            default:
                return;
        }

    }
    return {save, get, getById, getFilterType}
}