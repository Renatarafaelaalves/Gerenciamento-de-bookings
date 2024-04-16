const knex = require("../../conexao");

const excluirCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const clienteExistente = await knex("clientes").where({ id }).first();

    if (!clienteExistente) {
      return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    await knex("clientes").where({ id }).del();

    return res.status(200).json({ mensagem: "Cliente excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro no servidor: " + error.message });
  }
};

module.exports = excluirCliente;