const express = require('express');
const path = require('path');
const indexRouter = require('./router/indexRouter')
const productosController = require('./router/productosRouter')
const app = express();

app.set('view engine', 'ejs');


// Ruta de componentes estaticos
app.use(express.static(path.join(__dirname, '/public')));


// Rutas Dinamicas MVC
app.use('/', indexRouter);
app.use('/productos', productosController);

app.listen(3040, () => console.log('Servidor corriendo en el puerto 3040'));