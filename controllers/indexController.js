const products = require("../data/productsData");

module.exports = {

  index: function(req, res) { 
    
 res.render('index', { 
    title:'Home | Pimienta y Sal',
    products: products,
  })  
  
}} 