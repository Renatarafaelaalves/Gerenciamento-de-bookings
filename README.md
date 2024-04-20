# Gerenciamento de Reservas (Booking) e Containers

### Este sistema foi elaborado para gerenciar reservas (bookings) e containers, fornecendo uma plataforma eficaz para a administração e organização desses componentes fundamentais em operações logísticas. Com funcionalidades abrangentes, permite o cadastro, consulta e exclusão de reservas e containers, simplificando o monitoramento e a gestão desses recursos de maneira ágil e eficiente. Além disso, inclui recursos para o cadastro de usuários e clientes, agregando ainda mais praticidade e controle ao sistema.

# Configuração
Certifique-se de ter o Node.js instalado em seu ambiente.

Clone este repositório em sua máquina local.

```bash
# Clonando repositório.
git@github.com:Renatarafaelaalves/Gerenciamento-de-bookings.git

```
1 - Certifique-se de ter o Visual Studio Code (VSCode) instalado em sua máquina. Se ainda não tiver, você pode baixá-lo em Visual Studio Code.

2 - Após clonar o repositório, navegue até o diretório do projeto.

3 - Execute o seguinte comando para inicializar as dependências do projeto:

```bash
# Isso instalará todas as dependências necessárias listadas no arquivo package.json.
npm init
```
Agora, no terminal, execute o seguinte comando para iniciar o servidor:

```bash
#Isso iniciará o servidor usando o nodemon, que monitora quaisquer alterações nos arquivos do projeto e reinicia automaticamente o servidor quando necessário.

npm run dev
```
# Testando as Rotas da API
Você pode usar ferramentas como o Insomnia para testar as rotas da API. No projeto, fornecemos um arquivo para facilitar o teste das rotas no Insomnia. Basta importar este arquivo para o seu ambiente do Insomnia e começar a explorar as diferentes rotas.

# Banco de Dados
Todas as informações são registradas em um banco de dados PostgreSQL. O projeto utiliza um arquivo de conexão para buscar e armazenar informações no PostgreSQL. Também fornecemos um arquivo de despejo de banco de dados (damp) que permite criar rapidamente o banco de dados com a estrutura necessária. Basta executar o arquivo de despejo para configurar o ambiente do banco de dados e começar a utilizar o sistema.