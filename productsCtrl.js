module.exports = {

  get_all: function(res, req, next){
    db = req.app.get('db')
    db.read_products()
      .then(function(response){
        res.status(200).send(response)
      })
  },

  create: function(res, req, next){
    db = req.app.get('db')
    db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl])
      .then(function(response){
        res.status(200).send(response);
      })
  },

get_one: function(res, req, next){
  db = req.app.get('db')
  console.log(req.params);
  db.read_product([req.params.productId])
    .then(function(response){
      res.status(200).send(response)
    })
  },

update: function(res, req, next){
  db = req.app.get('db')
  db.update_product([req.body.id, req.body.description])
    .then(function(response){
      res.status(200).send(response)
    })
  },

delete: function(req, res, next){
  db = req.app.get('db')
  db.delete_product([req.params.productId])
    .then(function(response){
      res.status(200).send('Item Deleted')
    })
  },


}
