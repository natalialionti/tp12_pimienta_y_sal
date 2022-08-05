const products = require("../data/productsData");

module.exports = {

  index: (req, res) => {
    return res.render("index", {
      title: "Home | Pimienta y sal",
      products,
    });
  },
};
 
  
 /* index: function(req, res) { 
    res.render('index', { 
    title:'Home | Pimienta y Sal',
    products: products,
  })  
  
}} */