module.exports = function(app){
	app.get("/register", function(req,res){
		res.render("register");
	});
	app.post("/register", function(req,res){
		var User = global.dbHelper.getModel("user");
		var uname = req.body.uname;
		//console.log(uname+" "+req.body.pwd);
		User.findOne({name:uname}, function(error, doc){
			if(doc){
				req.session.error = "user name already exists, please choose another one";
				res.sendStatus(500);
			}else{
				User.create({
					name:uname,
					password: req.body.pwd
				}, function(error, doc){
					if(error){
						res.sendStatus(500);
					}else{
						req.session.error = "success in create user";
						res.sendStatus(200);
					}
				});
			}
		});
	});
}