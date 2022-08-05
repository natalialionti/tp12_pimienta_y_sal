const products = require("../data/productsData");

module.exports = {
    detail: (req, res) => {
      let product = products.find((product) => product.slug === req.params.slug);
  
      return res.render("detalleMenu", {
        product
      });
    },
  }; 
    
    /* detail : function(req, res) { 
       
      let product = products.find((product) => product.id === +req.params.id);

      return  res.render('detalleMenu', {product})
    } ,

  }   /* renderizo la vista detalle menu, osea, el controlador va a mostrar lo que haya en detalleMenu.js*/
      
