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
- Não encontrei documentação ou acesso a API do Buscapé, todos os dados em diretŕorios do Github e no Stackoverflow são de mais de 6 anos, a URL da [LinkApi](https://developers.linkapi.solutions/docs/buscape) funciona porém a [documentação](http://developer.buscape.com.br/portal/buscape/api-de-produtos/introducao), geração de [token de acesso](http://developer.buscape.com.br/portal/buscape/api-de-produtos/autenticacao), e a [url de busca](http://api.buscape.com.br/) retornam DNS_PROBE_FINISHED_NXDOMAIN, frente a isso e para não efetuar apenas a consulta em uma API, visto que, na minha concepção, o desafio seria a união de duas APIs com retornos diferentes em modelos diferentes, utilizei a [BlueCardAPI](https://www.bluecartapi.com/), API do WallMart.
- Ambas APIs são em idiomas diferentes e possui categorias diferentes, para questões de entrega do desafio e maior facilidade, criei as categorias "manualmente" utilizando os valores retornados por ambas APIs