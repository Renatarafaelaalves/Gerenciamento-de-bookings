const knex = require('../../conexao');

const editarDadosdoCliente = async (req, res) => {

    const { empresa, email, cnpj, cep, rua, numero, bairro, cidade, estado, telefone } = req.body;
    const { id } = req.params;
  
    try {
      const buscarCliente = await knex('clientes').where({ id }).first()
  
      if (!buscarCliente) {
          return res.status(404).json({ mensagem: 'Cliente não encontrado.' })
      }

    const emailExiste = await knex("clientes")
    .whereNot("id", id)
    .where("email", email);

  if (emailExiste.length > 0) {
    return res.status(400).json({
      mensagem: "Já existe Cliente cadastrado com o e-mail informado!",
    });
  }
  
      const cnpjExiste = await knex("clientes")
      .whereNot("id", id)
      .where("cnpj", cnpj);

    if (cnpjExiste.length > 0) {
      return res.status(400).json({
        mensagem: "Já existe cliente cadastrado com o CNPJ informado!",
      });
    }
    
      const dadosParaEditarCliente = await knex("clientes")
      .where({ id })
      .update({
        empresa,
        email,
        cnpj,
        cep, 
        rua, 
        numero, 
        bairro,
        cidade,
        estado,
        telefone
      }).returning('*');
  
      return res.status(200).json('Os dados do Cliente foram atualizados com sucesso.')
    } catch (error) {
        console.log(error)
      return res.status(500).json({ mensagem: "Erro no servidor"});
    }
  };

module.exports = editarDadosdoCliente;


