module.exports = function(app){
	app.get("/cart", function(req,res){
		var cart = global.dbHelper.getModel("cart");
		var active = ["","","","","","active"];
		cart.find({}, function(err,doc){
			//console.log(doc);
			res.locals.carts = doc;
			res.render("cart", {active:active, user:req.session.user});
		});
	});

	app.post("/cart/deleItem", function(req,res){
		console.log(req.body.data);
		res.send(200);
	});
}