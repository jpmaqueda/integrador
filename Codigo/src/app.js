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

const users=require('./routes/users')
app.use('/',users)

const products=require('./routes/products')
app.use('/', products)
