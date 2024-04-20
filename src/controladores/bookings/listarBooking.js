const knex = require('../../conexao');

const listarBooking = async (req, res) => {

    try {
        const booking = await knex('bookings');

        if (!booking) {
            return res.status(400).json({ mensagem: 'Booking não encontrado' });
        }

        return res.status(200).json({ booking });
    } catch (error) {

        return res.status(500).json({ mensagem: 'Erro do servidor' });
    }
};

module.exports = listarBooking;