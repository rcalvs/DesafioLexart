# Desafio Lexart - BackEnd

Aqui estão as ferramentas desenvolvidas no BackEnd do projeto, as tecnologias utilizadas foram:

- NodeJS
- MongoDB
- Express

---
## Requisitos

Para o desenvolvimento, você só precisará do Node.js e de um pacote global do nó, Yarn, instalado em seu ambiente.

### Node
- #### Instalação do Node no Windows

Basta acessar [site oficial do Node.js] (https://nodejs.org/) e baixar o instalador.
Além disso, certifique-se de ter `git` disponível em seu PATH,` npm` pode precisar dele (você pode encontrar git [aqui] (https://git-scm.com/)).

- #### Instalação do Node no Ubuntu

Você pode instalar nodejs e npm facilmente com apt install, basta executar os seguintes comandos.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Outros sistemas operacionais

Você pode encontrar mais informações sobre a instalação no [site oficial do Node.js] (https://nodejs.org/) e no [site oficial do NPM] (https://npmjs.org/).

Se a instalação foi bem-sucedida, você deve ser capaz de executar o seguinte comando.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

Se você precisar atualizar o `npm`, pode fazê-lo usando` npm`. Depois de executar o seguinte comando, basta abrir novamente a linha de comando.

    $ npm install npm -g

###
### Instalação do Yarn
Depois de instalar o node, este projeto também precisará do yarn, então apenas execute o seguinte comando.

      $ npm install -g yarn

---
## Configurar aplicativo

Abra `Lexart/backEnd/.env` e edite-o com suas configurações. Você vai precisar de:

- MONGO_DB_URL, uma URL válida de acesso ao MongoDB;
- DB_NAME, o nome do banco de dados escolhido;

## Instalação do Diretório

    $ git clone https://github.com/rcalvs/desafioLexart
    $ cd desafioLexart/backEnd
    $ yarn install

## Executando o projeto

    $ yarn run dev