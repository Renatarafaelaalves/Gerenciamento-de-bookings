const knex = require("../../conexao");

const listarContainersPorBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const bookingExistente = await knex("bookings").where({id}).first();
    if (!bookingExistente) {
      return res.status(404).json({ mensagem: "Booking não encontrado" });
    }

    const booking = await knex("containers").where({ booking_id: id });

    if (booking >= 0) {
      return res
        .status(404)
        .json({ mensagem: "Booking sem container cadastrado" });
    }

    return res.status(200).json({ booking });
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro ao listar containers", error: error.message });
  }
};

module.exports = listarContainersPorBooking;
