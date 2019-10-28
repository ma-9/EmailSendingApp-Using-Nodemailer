// =====================  Import Dependencies =========================
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');

// ========================= Creating App from Express =================
const app = express();

// =========================== View Engine Setup ===========================
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultLayout: __dirname + '/views/layouts/layout'
  }));
app.set('view engine', 'hbs');

// ============================= Body Parser Middleware ======================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ============================ Static Folder Setup ============================
app.use(express.static('public'));

// =========================== Handling Requests ==============================
app.use('/',routes);

// ======================== Listening Server Requests ======================
app.listen(PORT,()=>{
    console.log("Server Started..........");
})