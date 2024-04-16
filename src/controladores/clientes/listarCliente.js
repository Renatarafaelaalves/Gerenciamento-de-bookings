const knex = require('../../conexao');

const listarCliente = async (req, res) => {

    try {
        const cliente = await knex('clientes');

        if (!cliente) {
            return res.status(400).json({ mensagem: 'Nenhum cliente encontrado' });
        }

        return res.status(200).json({ cliente });
    } catch (error) {

        return res.status(500).json({ mensagem: 'Erro do servidor' });
    }
};

module.exports = listarCliente;
