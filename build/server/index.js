const express = require('express');
const bodyParser = require('body-parser');
const port = 8820;
const app = express();

const model = require('./../database/models/index.js');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist/'));

var tempBase = [{
  
}];

app.route('/api/orders')
  .post((req, res)=>{
    model.orders.create(req.body, (result)=>{
      res.status(200).send(result)
    });
  })
  .get((req, res)=>{
    let orders = [{
      username: '',
      description: 'cilantro',
      amount: '',
      quantity: '',
      price: '',
      picUrl: '',
      order: ''
    }]

    model.orders.retrieve((data)=>{
      res.status(200).send(data)
    });
  })

app.listen(port, ()=>{
    console.log(`App listening on ${port}`);
})



