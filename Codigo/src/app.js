const express = require('express');
const app = express();
const path=require('path')
const PORT=3000;
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

app.listen(PORT,()=>console.log('Servidor corriendo en puerto '+ PORT))
app.use(express.static(path.resolve(__dirname,'../public')));

const indexRoutes=require('./routes/indexRoutes');
app.use('/', indexRoutes)

const pcRoutes=require('./routes/pcRoutes');
app.use('/', pcRoutes)

const productDetailRoutes=require('./routes/productDetailRoutes')
app.use('/',productDetailRoutes)

const users=require('./routes/users')
app.use('/',users)


const shoppingCartRouter=require('./routes/shoppingCartRoutes')
app.use('/',shoppingCartRouter)


const peRoutes=require('./routes/peRoutes');
app.use('/', peRoutes)

