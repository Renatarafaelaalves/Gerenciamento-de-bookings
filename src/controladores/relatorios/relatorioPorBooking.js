const knex = require('../../conexao');

const relatorioPorBooking = async (req, res) => {
    const { id } = req.params;

    try {
       
        const booking = await knex('bookings').where({ id }).first();

        if (!booking) {
            return res.status(404).json({ mensagem: 'Booking não encontrado' });
        }

        const cliente = await knex('clientes').where({ id: booking.cliente_id }).first();

        const containers = await knex('containers').where({ booking_id: id });

        return res.status(200).json({ booking, cliente, containers });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao gerar o relatório', error });
    }
};

module.exports = relatorioPorBooking;