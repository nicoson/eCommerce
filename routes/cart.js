module.exports = function(app){
	app.get("/cart", function(req,res){
		var cart = global.dbHelper.getModel("cart");
		var active = ["","","","","","active"];
		cart.find({}, function(err,doc){
			//console.log(doc);
			res.locals.carts = doc;
			res.render("cart", {active:active});
		});
	});
}