const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteCategory = require('./routers/category.route');
const RouteProduct = require('./routers/product.route');
const RoutePTag = require('./routers/tag.route');


const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

/**
 * ROUTER
 */
app.use('/category', RouteCategory);
app.use('/product', RouteProduct);
app.use('/tag', RoutePTag);

mongoose.connect('mongodb://localhost/mern-stack-0106', {useNewUrlParser : true})
    .then(()=> {
        console.log('Connected to mongoDB')
        app.listen(3000, () => console.log(`server start port 3000`));      
    })
    .catch(console.log)