const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const searchController = require('./controllers/searchController')

app.use(cors());

// Parse request body to json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'Working' })
});

app.post('/save', searchController.create);

// /save salva a pesquisa, a pesquisa
// obj Search {
//  query: pesquisa enviada
//  data: [array de resposta]  
//}

app.listen(3001, () => console.log('App listening on port 3000!'));