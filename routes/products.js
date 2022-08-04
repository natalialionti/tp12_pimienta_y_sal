var express = require('express');
var router = express.Router();

const {detail} = require("../controllers/productsController");  /* desestructuro el objeto que contiene los métodos del controlador products (en este caso solo detail) y lo requiero */ 

/* /detail */

router.get('/detail/:id', detail );  /* pongo el método detail que responde al controlador "productsController" dentro de la ruta /detail */

module.exports = router;