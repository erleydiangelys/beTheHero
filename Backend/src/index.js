const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * 
 * Rota, Recurso
 * 
 */

 /**
  *  metodos HTTP
  * GET: Bsucar informações do back-end
  * POST: criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: deletar uma informação no back-end
  * 
  */

    /**
     * Tipos de parêmentros
     * 
     * Query: Paramentros nomeados enviados na rota após o "?"
     * e eles servem para (filtros, paginaçoes)
     * router: Paramentros ultilizados para identificar recursos ex: /:id 
     * request body: corpo da requisição ultilizado para criar ou alterar recursos ex senha nome de usuario
     */

    /**
     * Banco de dados:
     * SQL: mySQL. psotgreeSQL, SQlite
     * NOSQL: MongoDB, CouchDB
     * 
     * instalando: 
     * driver: SELECT * FROM users
     * 
     * uwery biulder: table('users').select.
     */
