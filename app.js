var express = require("express");
var bodyParser = require("body-parser");
//var multer = require("multer");
var session = require("express-session");
global.dbHelper = require("./common/dbHelper");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(multer());

// app.use(function(req,res,next){
// 	res.locals.user = req.session.user;
// 	var err = req.session.error;
// 	res.locals.message = "";
// 	if(err)res.locals.message = "<div class='alert alert-danger' style='margin-bottom: 20px;color:red;'>" + err + "</div>";
// 	next();
// });

//set session
app.use(session({
	secret:"secret",
	resave: false,
	saveUninitialized: true,
	cookie:{maxAge:1000*60*24*2}
}));

//set view engine & views file dir & public files dir
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
app.set('views', require('path').join(__dirname, 'views'));
app.use(express.static(require('path').join(__dirname, 'public')));

app.get("/", function(req,res){
	res.render("home", {active: ["active","","","","",""]});
});

//router management
require("./routes/index")(app);

app.listen(3000);
console.log("web service started on port: 3000");