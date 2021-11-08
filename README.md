# DesafioLexart - FullStack

Esse desafio proposto pela [Lexart Labs](https://lexartlabs.com/) como um teste técnico para preenchimento de vaga Full Stack, dessa forma, nesse repositório há dois diretórios, um para o FrontEnd e outro para o BackEnd, ambos possuem README proprios para auxilia-lo a rodar o projeto, então inicialmente, basta clonar esse repositório e, dentro de cada pasta, seguir as orientações propostas.

---
## Contexto:

Crie um mecanismo de pesquisa de produtos que se conecte à página do mercado livre e do Buscapé*.
- Através de um menu drop-down podemos escolher as categorias: Celular, Geladeira, TV.
- Através de um menu drop-down podemos escolher o site: Mercado Livre / Buscapé*
- Crie uma entrada de texto livre para pesquisar produtos
- Após buscar a lista de produtos que aparecerá na tela com: Foto, descrição, categoria, preço e site de onde foi obtida a informação
- Armazene os resultados no banco de dados após a pesquisa do usuário. Se repetir a mesma pesquisa (leve em consideração apenas os filtros de categoria e web para armazenar), mostre o que sai da base e não desfaça para as webs.
- Hospede a solução online em um servidor gratuito como o heroku ou alguma outra alternativa.

## Requisitos Técnicos Aplicados a resolução
- Front-End em React;
- Estilização com TailwindCSS
- Back-End em NodeJS, com MongoDB;
- Arquitetura em camadas;

## Dificuldades encontradas no Desenvolvimento
- WebScrapping feito no site do Buscapé porém o mesmo não é muito... "semântico" o que dificultou no código do backend, fazendo-o ser bem... desgastante para ser lido, principalmente para se retirar os valores através dos document.querySelector
