const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
    // {
    // origin: 'http://meuapp.com'
// }
));
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota  /Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Busca/listar uma informacao back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar informacao no back-end
 * DELETE: Deletar informacao no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
  * Route Params: Parametros utilizados para indentificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



