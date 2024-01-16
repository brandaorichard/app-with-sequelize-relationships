1) Setup inicial:
-> npm init -y
-> npm install -E sequelize@6.3.4

Criar o arquivo .env para setar as variaveis de ambiente
- .env (raiz do projeto)

Instalacao do CLI e MySQL:
-> npm install -D -E sequelize-cli@6.6.1
-> npm install -E mysql2@3.0.0

2) Inicialização do Sequelize - Criar a pasta /src e iniciar o CLI:
-> npx sequelize-cli init -> ira gerar as pastas config, models, migrations e seeders.

Criar o arquivo .sequelize para configurar o caminho das pastas:
- .sequelize (raiz do projeto)

3) Conexão com o banco de dados
- Renomear o config.json para config.js e alterar o conteudo para nossas variaveis de ambiente.
- No index.js da models alterar a linha da const config para config.js

- Antes de rodar os comandos sequelize, sempre checar se tem uma instancia do mysql rodando.
-> docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha -d -p 3306:3306 mysql:8.0.29

4)  Criação do banco de dados usando o CLI do Sequelize
- Apos iniciar a aplicacao sequelize e o mysql rodando, podemos criar o banco de dados:
-> env $(cat .env) npx sequelize db:create

NOTA: o comando env $(cat .env) irá realizar a leitura das variáveis do arquivo .env e repassá-las para o próximo comando, disponibilizando assim os valores das variáveis de ambiente para o seu código através do process.env.NOME_DA_VARIAVEL.

- Eager Loading: Deve ser usado quando queremos puxar todos os dados de todas as tabelas que estao relacionadas
- Lazy Loading: Deve ser usado quando queremos filtrar os dados das tabelas que estao relacionadas.