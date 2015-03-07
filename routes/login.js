module.exports = function(app){
	app.get("/login", function(req, res){
		var active = ["","","active","","",""];
		res.render("login", {active:active});
	});

	app.post("/login", function(req, res){
		var User = global.dbHelper.getModel("user");
		var uname = req.body.uname;
		console.log(uname +":"+req.body.uname);
		
		User.findOne({name:uname}, function(err, doc){
			console.log(req.body.pwd +":"+doc.password);
			if(err){
				req.session.error = "not exists!";
				res.sendStatus(404);
			}else if(doc.password != req.body.pwd){
				req.session.error = "not correct!";
				res.sendStatus(404);
			}else{
				req.session.user = doc.name;
				res.sendStatus(200);
			}
		});
	});
}