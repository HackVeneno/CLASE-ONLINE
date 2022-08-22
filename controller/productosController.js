const path = require('path');

const indexController = {
    /**
     *  logica     
     */
    productos: (req, res) => {
        res.sendFile(path.join (__dirname, "../views/productos.html"))
    },
};

module.exports = indexController;