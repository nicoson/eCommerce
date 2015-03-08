module.exports = function(app){
	app.get("/phone-home", function(req, res){
		if(req.session.user){
			var commodity = global.dbHelper.getModel("commodity");
			commodity.find({}, function(error, doc){
				res.render("phone-home",{commoditys:docs, user:req.session.user});
			});
		}else{
			req.session.error = "please login";
			req.redirect("/login");
		}
	});
}