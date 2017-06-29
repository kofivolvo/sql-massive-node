const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = module.exports = express();

massive('postgres://ianosei-agyeman@localhost/ayy_its_lit')
.then(function(db) {
  app.set('db', db)
})

app.use(bodyParser.json());
app.use(cors());




app.get('/api/products', productsCtrl.get_all);
app.get('/api/product/:productId', productsCtrl.get_one);
app.put('/api/product/:productId', productsCtrl.update);
app.post('/api/product', productsCtrl.create);
app.delete('/api/product/:productId', productsCtrl.delete);





app.listen(6420, function(){
  console.log('Ayyy port 6420 Lit Tho');
})
