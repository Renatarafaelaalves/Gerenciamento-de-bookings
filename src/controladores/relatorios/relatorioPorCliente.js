const knex = require('../../conexao');

const relatorioPorCliente = async (req, res) => {
    const { id } = req.params;

    try {

        const cliente = await knex('clientes').where({ id }).first();

        if (!cliente) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado' });
        }

     
        const bookings = await knex('bookings').where({ cliente_id: id });

        for (const booking of bookings) {
            booking.containers = await knex('containers').where({ booking_id: booking.id });
        }

        return res.status(200).json({ cliente, bookings });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao gerar o relatório', error });
    }
};

module.exports = relatorioPorCliente;