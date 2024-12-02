# 👾 Utilizando Prisma para Gerenciamento de Banco de Dados

O Prisma é um gerenciador de banco de dados, permitindo fácil integração com bancos de dados relacionais e não relacionais. Ele oferece um ORM (Object-Relational Mapping) que simplifica o acesso e manipulação de dados, além de fornecer recursos como migrações, geração de código de cliente e consulta eficiente.


## Instalação e Configuração
  - Para instalar o Prisma em seu projeto, execute o seguinte comando no terminal: ` npm install --save-dev prisma `

  - Após a instalação, inicialize o Prisma no seu projeto com o comando: ` npx prisma init `  

  - O arquivo `.env` precisa ser configurado com a URL de conexão do seu banco: ` "<tipo_do_banco>://<usuário>:<senha>@<url:porta>/<nome_do_banco>?schema=public" `

## Conceitos Fundamentais

* **Schema.prisma:**  
  O arquivo `schema.prisma` é o coração do Prisma. Ele define o modelo de dados, os tipos de dados e os relacionamentos entre as tabelas do banco de dados. Ele também permite a configuração do provedor de banco de dados e outros recursos.

* **Prisma Client:**  
  O Prisma Client é gerado a partir do arquivo `schema.prisma` e fornece uma interface para interagir com o banco de dados. Ele permite realizar operações como criar, ler, atualizar e excluir registros de forma eficiente e com suporte a autocompletar e validações.

* **Migrações:**  
  Migrações no Prisma são uma maneira de versionar e controlar as alterações no banco de dados ao longo do tempo. Elas são importantes para manter o banco de dados sincronizado com o código da aplicação em ambientes de desenvolvimento, teste e produção.

## Comandos Prisma

### npx prisma db push
Sincroniza o arquivo schema.prisma com o banco de dados, aplicando as alterações diretamente no banco <b>sem gerar migrações</b>.

- **Quando usar?**
  - Durante o desenvolvimento inicial para alterações rápidas no esquema.
  - Para criar ou modificar tabelas e campos no banco diretamente.  

### npx prisma db pull
Sincroniza o banco de dados remoto com o arquivo schema.prisma, gerando ou atualizando o modelo com base na estrutura remota do banco.

- **Quando usar?**
  - Para criar o arquivo schema.prisma com base em um banco de dados existente.
  - Para atualizar o modelo após alterações feitas diretamente no banco.

### npx prisma migrate dev --name nome_da_migracao
  - Cria e aplica uma migração baseada nas alterações feitas no arquivo schema.prisma, gera uma nova migração na pasta prisma/migrations permitindo um controle versionado das mudanças no banco de dados.

- **Quando usar?**
  - Durante o desenvolvimento para versionar e aplicar alterações no esquema do banco.
  - Quando é necessário garantir um histórico rastreável das mudanças realizadas.
  - Para sincronizar o banco com o código, criando registros das alterações no diretório de migrações.
