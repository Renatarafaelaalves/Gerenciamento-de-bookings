const knex = require("../../conexao");

const excluirContainer = async (req, res) => {
  const { id } = req.params;

  try {
    const containerExistente = await knex("containers").where({ id }).first();

    if (!containerExistente) {
      return res.status(404).json({ mensagem: "Container não encontrado" });
    }

    await knex("containers").where({ id }).del();

    return res
      .status(200)
      .json({ mensagem: "Containers excluído com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro no servidor: " + error.message });
  }
};

module.exports = excluirContainer;
