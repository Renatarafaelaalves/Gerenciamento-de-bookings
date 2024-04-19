const knex = require('../../conexao');

const detalharContainer = async (req, res) => {
    const id = req.params.id;

    try {
        const containerExistente = await knex('containers').where({ id }).first();

        if (!containerExistente) {
            return res.status(404).json({ mensagem: 'Container não encontrado' });
        }

        const container = await knex('containers')
            .select("booking_id", "numero_container", "tipo", "tamanho")
            .where({ id })
            .first();

        return res.status(200).json({ container });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor", error: error.message });
    }
};

module.exports = detalharContainer;

   