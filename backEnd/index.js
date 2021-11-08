const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const searchController = require('./controllers/searchController')
const webScrapper = require('./services/webScrapper')

app.use(cors());

// Parse request body to json
app.use(bodyParser.json());
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.get('/', (req, res) => {
  res.send({ message: 'Working' })
});

app.get('/buscape/:id', webScrapper.getById);
app.get('/buscape/query/:id', webScrapper.getByQuery);


app.post('/save', searchController.create);
app.get('/save/:id', searchController.getById);
app.get('/save', searchController.getAll);

app.listen(3001, () => console.log('App listening on port 3001!'));