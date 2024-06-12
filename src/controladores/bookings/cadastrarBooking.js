const knex = require("../../conexao");

const cadastrarBooking = async (req, res) => {
  const { booking_numero, data_embarque, observacao, cliente_id } = req.body;

  if (!booking_numero || !data_embarque || !cliente_id) {
    return res
      .status(404)
      .json({
        message:
          "Os campos: (booking, data_embarque e cliente_id) são obrigatórios.",
      });
  }

  try {
    const bookingExiste = await knex("bookings")
      .where({ booking_numero })
      .first();

    if (bookingExiste) {
      return res
        .status(400)
        .json({
          message: "Já existe Booking cadastrado com essa numeração informada!",
        });
    }

    const buscarCliente = await knex("clientes")
      .where({ id: cliente_id })
      .first();
    if (!buscarCliente) {
      return res.status(404).json({ mensagem: "Cliente não encontrado." });
    }
    const novoBooking = await knex("bookings").insert({
      booking_numero,
      data_embarque,
      observacao,
      cliente_id,
    });

    res
      .status(201)
      .json({ mensagem: "Booking de embarque cadastrado com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({
        mensagem: "Erro ao cadastrar booking de embarque",
        error: error.message,
      });
  }
};

module.exports = cadastrarBooking;
//adicionando comentario para teste
