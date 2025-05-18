<p align="center">
  <a href="https://aluiziodeveloper.com.br/">
    <img alt="Conex Networks" src="https://aluiziodeveloper.com.br/assets/img/icon.png" width="200" />
  </a>
</p>
<h2 align="center">
Cursos, mini-cursos, dicas, tutoriais e muito mais.
</h2>

## Curso: API Restful Javascript com Node.js, Typescript, TypeORM etc

Seja muito bem-vindo e bem-vinda ao curso: **API Restful Javascript com Node.js, Typescript, TypeORM etc**, aqui você desenvolverá um exemplo de uma API de vendas, com os módulos de produtos, usuários, clientes e pedidos de compras, além vários outros recursos, incluindo o uso do TypeORM, upload de arquivos, autenticação com JWT, sistema de cache com o Redis, e muito mais.

Você precisará do Docker instalado em seu ambiente de desenvolvimento para rodar Postgres e Redis.

Este repositório contém o código inicial do projeto que será desenvolvido durante o curso. A ideia é ganhar tempo já trazendo todas as configurações iniciais prontas e focar naquilo que é mais importante, que é a implementação da API de fato.

### Instalando o projeto no seu PC

Instale o projeto em seu ambiente de desenvolvimento seguindo as etapas a seguir.

> NOTA: caso o seu PC esteja com Windows, recomendo trabalhar com um WSL Ubuntu. Acesse o link https://www.aluiziodeveloper.com.br/ambiente-de-desenvolvimento-no-windows-10-11-com-wsl/ para mais informações.

1. No Shell, clonar o repositório do projeto em seu PC.

```shell
git clone https://github.com/conexnetworks/apivendas2024-course-start-code.git api-vendas-2024
```

2. No Shell, acessar a pasta do projeto e instalar as dependências com o `Npm`.

```shell
cd api-vendas-2024

npm ci
```

3. No Shell, executar o comando `code .` para abrir o Visual Studio Code com o projeto carregado.

4. Criar o arquivo de variaveis de ambiente `.env` na pasta raiz do projeto, incluindo o conteúdo a seguir:

```shell
# Application
PORT=3333
API_URL=http://localhost:3333
```

### Estrutura do Projeto

O projeto está estruturado com as seguintes características:

1. **Infraestrutura de Banco de Dados**:
   - Utiliza TypeORM para gerenciamento do banco de dados
   - Configuração de migrations para versionamento do banco
   - Suporte a UUID para identificadores únicos

2. **API Features**:
   - Express.js como framework web
   - Suporte a CORS habilitado
   - Documentação Swagger em `/docs`
   - Tratamento centralizado de erros
   - Estrutura modular e organizada

3. **Tabelas do Banco**:
   - Tabela `products` com os campos:
     - id (UUID, chave primária)
     - name (varchar)
     - price (decimal)
     - quantity (int)
     - created_at (timestamp)
     - updated_at (timestamp)

### Executando o projeto em seu PC

Para executar o projeto, siga os passos abaixo:

1. Certifique-se que o banco de dados PostgreSQL está rodando
2. Execute as migrations do banco de dados:
```shell
npm run typeorm migration:run
```
3. Inicie o servidor:
```shell
npm run dev
```

O servidor estará disponível em http://localhost:3333 com documentação Swagger em http://localhost:3333/docs

```shell
npm run dev
```




