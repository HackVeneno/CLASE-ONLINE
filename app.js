const express = require('express');
const indexRouter = require('./router/indexRouter')
const productosController = require('./router/productosRouter')

const app = express();

app.use('/', indexRouter);
app.use('/productos', productosController);

app.listen(3040, () => console.log('Servidor corriendo en el puerto 3040'));