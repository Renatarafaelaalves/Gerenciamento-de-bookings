const knex = require('../../conexao');

const listarContainer= async (req, res) => {

    try {
        const container = await knex('containers');

        if (!container) {
            return res.status(400).json({ mensagem: 'Nenhum container encontrado' });
        }

        return res.status(200).json({ container });
    } catch (error) {

        return res.status(500).json({ mensagem: 'Erro do servidor' });
    }
};

module.exports = listarContainer;