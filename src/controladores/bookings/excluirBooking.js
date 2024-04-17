const knex = require("../../conexao");

const excluirBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const bookingExistente = await knex("bookings").where({ id }).first();

    if (!bookingExistente) {
      return res.status(404).json({ mensagem: "Booking não encontrado" });
    }

    const containerVinculadoBooking = await knex("containers")
      .where({ booking_id: id })
      .first();

    if (containerVinculadoBooking) {
      return res
        .status(400)
        .json({
          mensagem:
            "Booking não pode ser excluído, pois está vinculado a um container.",
        });
    }

    const booking_numero = bookingExistente.booking_numero;

    bookingExcluido = await knex("bookings").where({ id }).del();

    return res.status(200).json({
      mensagem: `Booking de ID ${id} da reserva de numero,  
        ${booking_numero} excluído com sucesso`,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ mensagem: "Erro no servidor", error: error.message });
  }
};

module.exports = excluirBooking;
