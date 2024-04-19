const knex = require('../../conexao');

const cadastrarContainer = async (req, res) => {
    const { booking_id, numero_container, tipo, tamanho } = req.body;
 
    
    if (!booking_id || !numero_container || !tamanho) {
        return res.status(404).json({ mensagem: 'Os campos: (booking_id, numero_container e tamanho) são obrigatórios.' });
}

    try {
        const containerExiste = await knex('containers').where({ numero_container }).first();

        if (containerExiste) {
            return res.status(400).json({ mensagem: 'Já existe containers cadastrado com essa numeração informada!' });
        }

        const buscarBooking = await knex('bookings')
      .where({ id: booking_id })
      .first()
    if (!buscarBooking) {
      return res.status(404).json({ mensagem: 'Booking não encontrado!' })
    }
      const novoContainer = await knex("containers").insert({
        booking_id,
        numero_container,
        tipo,
        tamanho,
      });
  
      res.status(201).json({ mensagem: "Container cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao cadastrar container", error });
    }
  };

  module.exports = cadastrarContainer;