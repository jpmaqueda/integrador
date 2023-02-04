/*          REQUIRE'S             */
const express = require('express');
const path=require('path');
const methodOverride =  require('method-override');// Pasar poder usar los métodos PUT y DELETE
const session =require('express-session');
const PORT=3000;

/*          EXPRESS               */
const app = express();


/*          MIDDLEWARES           */
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(methodOverride('_method'));// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(session({secret:'secreto!!!!'}))

/*         TEMPLATE ENGINE        */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))// Define la ubicación de la carpeta de las Vistas


/*         ROUTES                 */
const products=require('./routes/products')
const users=require('./routes/users')
const indexRoutes=require('./routes/indexRoutes');

app.listen(PORT,()=>console.log('Servidor corriendo en puerto '+ PORT))

app.use('/', indexRoutes)
app.use('/',users)
app.use('/', products)
