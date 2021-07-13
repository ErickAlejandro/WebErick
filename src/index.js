//constantes
const express = require('express');
const app = express();
const path = require('path');


//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//middlewares


//routes
app.use( require('./routes/index'));

//Static FILES
app.use(express.static(__dirname+'/public'));


//listen the server
app.listen(app.set('port'), ()=> {
    console.log('Server on port', app.set('port'));
});