const express = require('express');
const app = express();
const path=require('path')
const PORT=3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.listen(PORT,()=>console.log('Servidor corriendo en puerto '+ PORT))
app.use(express.static(path.resolve(__dirname,'../public')));

const indexRoutes=require('./routes/indexRoutes');
app.use('/', indexRoutes)

const pcRoutes=require('./routes/pcRoutes');
app.use('/', pcRoutes)

const loginRoutes=require('./routes/loginRoutes')
app.use('/', loginRoutes)

const productDetailRoutes=require('./routes/productDetailRoutes')
app.use('/',productDetailRoutes)

const registerRoutes=require('./routes/registerRoutes')
app.use('/',registerRoutes)

const shoppingCartRouter=require('./routes/shoppingCartRoutes')
app.use('/',shoppingCartRouter)


