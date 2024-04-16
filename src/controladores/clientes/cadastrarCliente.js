const knex = require('../../conexao');

const cadastrarCliente = async (req, res) => {
    const { empresa, email, cnpj, cep, rua, numero, bairro, cidade, estado, telefone } = req.body

    if (!empresa || !email || !cnpj) {
        return res.status(404).json({ message: 'Os campos: (Empresa, Email e CNPJ) são obrigatórios.' });
    }

    try {
        const emailExiste = await knex('clientes').where({ email }).first();

        if (emailExiste) {
            return res.status(400).json({ message: 'Já existe cliente cadastrado com o e-mail informado!' });
        }

        const cpfExiste = await knex('clientes').where({ cnpj }).first();

        if (cpfExiste) {
            return res.status(400).json({ message: 'Já existe cliente cadastrado com o cnpj informado!' });
        }

        const novoCliente = await knex('clientes')
            .insert({
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
            })
            .returning('*');

        if (novoCliente) {
            return res.status(201).json({ message: 'Cliente cadastrado com sucesso', novoCliente });
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro no servidor' });
    }
}
module.exports = cadastrarCliente;

