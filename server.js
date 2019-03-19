var express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;
//const Produto = require('./app/models/produto');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


router.get('/', function(req, res) {
  res.json({message: 'Testing...'});
});

app.use('/api', router);

app.listen(port, function() {
  console.log(`Servidor rodando na porta: ${port}`)
});