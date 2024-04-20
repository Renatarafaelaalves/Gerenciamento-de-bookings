const knex = require('../../conexao');

const relatorioPorContainer = async (req, res) => {
    const { id } = req.params;

    try {
       
        const container = await knex('containers').where({ id }).first();

       
        if (!container) {
            return res.status(404).json({ mensagem: 'Container não encontrado' });
        }

        const booking = await knex('bookings').where({ id: container.booking_id }).first();

        const cliente = await knex('clientes').where({ id: booking.cliente_id }).first();

        return res.status(200).json({ container, booking, cliente });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao gerar o relatório', error });
    }
};

module.exports = relatorioPorContainer;