const path = require('path');

const indexController = {    
    index: (req, res) =>  {
    /**
     *  logica
     */     
        res.sendFile(path.join (__dirname, "../views/index.html"))
    },
};

module.exports = indexController;