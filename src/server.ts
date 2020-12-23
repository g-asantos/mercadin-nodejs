import express from 'express';

const server = express();

import compras from './controllers/Compras';

server.use(express.urlencoded({ extended: true }));

server.listen(3000, () => {
  compras.main();
});
