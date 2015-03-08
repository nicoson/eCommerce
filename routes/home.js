module.exports = function(app){
	app.get("/", function(req,res){
		res.render("home", {active: ["active","","","","",""], user:req.session.user});
	});
}