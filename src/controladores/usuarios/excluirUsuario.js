const knex = require("../../conexao");

const excluirUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioExistente = await knex("usuarios").where({ id }).first();

    if (!usuarioExistente) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    await knex("usuarios").where({ id }).del();

    return res.status(200).json({ mensagem: "Usuário excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro no servidor: " + error.message });
  }
};

module.exports = excluirUsuario;