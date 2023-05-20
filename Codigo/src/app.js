/*          REQUIRE'S             */
const express = require('express');
const path=require('path');
const session =require('express-session');
const cookies = require('cookie-parser');
const methodOverride =  require('method-override');// Pasar poder usar los métodos PUT y DELETE
const userLoggedMiddleware=require('./middlewares/userLoggedMiddleware');
const port = process.env.PORT || 3000;
/*          EXPRESS               */
const app = express();
const cors=require('cors');
app.use(cors());


/*          MIDDLEWARES           */
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(methodOverride('_method'));// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(cookies());
app.use(session({
    secret:'secreto!!!!',
    resave:false,
    saveUninitialized:true
}))
app.use(userLoggedMiddleware);

/*         TEMPLATE ENGINE        */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))// Define la ubicación de la carpeta de las Vistas


/*         ROUTES                 */
const products=require('./routes/products')
const users=require('./routes/users')
const indexRoutes=require('./routes/indexRoutes');
const userApi = require('./routes/api/userApi')
const productApi = require('./routes/api/productApi')


app.use('/', indexRoutes)
app.use('/',users)
app.use('/', products)

app.use('/api/users', userApi)
app.use('/api/products/', productApi)


app.listen(port,()=>console.log('Servidor corriendo en puerto '+ port))