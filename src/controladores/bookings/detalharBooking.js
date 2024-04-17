const knex = require('../../conexao');

const detalharBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const bookingExistente = await knex('bookings').where({ id }).first();

        if (!bookingExistente) {
            return res.status(404).json({ mensagem: 'Booking não encontrado' });
        }

        const booking = await knex('bookings')
            .select("booking_numero", "data_embarque", "observacao", "cliente_id")
            .where({ id })
            .first();

        return res.status(200).json({ booking });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor", error: error.message });
    }
};

module.exports = detalharBooking;