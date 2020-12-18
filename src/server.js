const express = require('express');

const server = express();

const compras = require('./controllers/Compras');

server.use(express.urlencoded({extended: true}));



server.listen(3000, () => {
    compras.main();
})