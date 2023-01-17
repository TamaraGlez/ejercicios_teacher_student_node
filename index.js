const express = require("express"); /*  -> express nos servirá para levantar nuestro servidor, para las rutas...; */

const cors = require("cors"); /*  -> las cors sirven para permitir o denegar que se pueda acceder al servidor desde x sitios */

const db = require("./src/utils/db"); /* -> importar db */

db.connectDB(); /* -> utilizamos la función que me conecta con la base de datos de nuestro archivo db */

// All Routes imports -> para luego poder utilizarlas en nuestro servidor
const indexRoutes = require("./src/api/index/index.routes");
const teachersRoutes = require("./src/api/teachers/teacher.routes");

// declaramos el puerto en el que se levantará nuestro servidor
const PORT = 8080;

// ejecutamos nuestro express() para tener acceso al server y poder hacer ciertas cosas sobre el
const server = express();

// Para que admita peticiones desde otro servidor, front o app. -> las cors al estar vacías indicará que todo el mundo puede acceder a nuestro servidor
server.use(cors());

// Transformar el contenido o cuerpo de las peticiones POST (req.body)
// Convierte cuando enviamos un post con json al servidor
server.use(express.json());
// convierte cuando mandamos un form o formData al servidor
server.use(express.urlencoded({ extended: true }));

// Configuración de todas las rutas de nuestro servidor
server.use("/teachers", teachersRoutes);
server.use("/", indexRoutes);

// Por aquí pasarán todas las rutas que no existan.
// si no hacen match en las rutas previas, llegarán aquí y harán match con asterisco (todo entra!)
server.use("*", (req, res, next) => {
  return res.status(404).json("No se encuentra la URL. Prueba con otra URL");
});

// Controlador de errores.
server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Unexpected Error!";
  return res.status(status).json(message);
});

server.listen(PORT, () => {
  console.log(`[Server] echando chispas en http://localhost:${PORT}`);
});

/**
 * - .gitignore
 * - package.json
 * - index.js
 * - /src
 *      - /api
 *          - /teachers (aquí crearemos un CRUD para profesores, ej: Santi, Juan, Roberto etc...)
 *              teacher.model.js
 *              teacher.routes.js
 *              teacher.controller.js
 *
 *          - /users (los usuarios de nuestra web seréis vosotros mismos, accederéis a la APP.)
 *              user.model.js
 *              user.routes.js
 *              user.controller.js
 *
 *          - /course-blocks (JS, Node, React etc...)
 *              courseBlock.model.js
 *              courseBlock.routes.js
 *              courseBlock.controller.js
 *
 *          - /course-sessions (Dia 20/enero una clase de (bloque clases) con el profesor (teacher))
 *              courseBlock.model.js
 *              courseBlock.routes.js
 *              courseBlock.controller.js
 *
 *
 *      - /utils
 *          - db.js
 *(INDEX ROUTES)
 *  / (GET)                                             - RUTA PRINCIPAL DEL SERVIDOR
 *  /status (GET)                                       - Nos devuelve un texto, si lo recibimos quiere decir que el servidor está funcionado.
 *
 *
 *(TEACHERS ROUTES)
 *  /teachers (GET)                                     - Nos devuelve TODOS los elementos
 *  /teachers/id-del-elemento (GET)                     - Nos devuelve un elemento por ID
 *  /teachers/create (POST)                             - Crea un elemento
 *  /teachers/edit/id-del-elemento (EDIT)               - Edita un elemento
 *  /teachers/delete/id-del-elemento (DELETE)           - Elimina un elemento
 *
 *
 *(COURSE BLOCKS ROUTES)
 *  /course-blocks (GET)                                - Nos devuelve TODOS los elementos
 *  /course-blocks/id-del-elemento (GET)                - Nos devuelve un elemento por ID
 *  /course-blocks/create (POST)                        - Crea un elemento
 *  /course-blocks/edit/id-del-elemento (EDIT)          - Edita un elemento
 *  /course-blocks/delete/id-del-elemento (DELETE)      - Elimina un elemento
 *
 *
 *(COURSE SESSIONS ROUTES)
 *  /course-sessions (GET)                              - Nos devuelve TODOS los elementos
 *  /course-sessions/id-del-elemento (GET)              - Nos devuelve un elemento por ID
 *  /course-sessions/create (POST)                      - Crea un elemento
 *  /course-sessions/edit/id-del-elemento (EDIT)        - Edita un elemento
 *  /course-sessions/delete/id-del-elemento (DELETE)    - Elimina un elemento
 *
 *
 * (USER ROUTES)
 *  /register (POST)                                    - Recibimos usuario,
 *  /login (POST)                                       - Recibe usuario y email para loguearnos en nuestro servidor
 *  /check-session (GET)                                - GET que nos devolverá si tenemos usuario logueado (Front primera carga)
 *  /logout (POST)                                      - Desconecta al usuario de la sesión
 */
