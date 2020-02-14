var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require("mongoose");
const userRoutes = require('./userRouter/userRoutes.js')
// Configuring the database
const dbConfig = require('./config/database.config.js');

mongo.Promise = global.Promise;

// Connecting to the database
mongo.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

/*var db = mongo.connect("mongodb://localhost:27017/user", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to ' + db, ' + ', response); }
});*/
 

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/users',userRoutes);

app.get('/', (req, res) => {
  res.json({"message": "Welcome to mrcb application. Take notes quickly. Organize and keep track of all your notes."});
});

app.listen(8080, function () {

  console.log('Example app listening on port 8080!')
})  