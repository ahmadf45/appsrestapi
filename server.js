const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//memanggil routes
var routes = require('./routes');
routes(app);

 app.listen(3000, () => {
     console.log('Server started');
 });