var express = require('express');
var router = express.Router();

var provincias_controller = require('../controllers/provinciasController');

// JADE fue reemplazado por el motor de plantillas PUG, express generator viene con jade por defecto. habria
// que cambiarlo.

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  estado = provincias_controller.mostrarInfo(req.body.nombreProv);
  res.render('index', { desc: 'Revisar consola de node'});
});

module.exports = router;