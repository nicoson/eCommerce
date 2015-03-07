module.exports = function(app){
	app.get("/products", function(req,res){
		var active = ["","active","","","",""];
		res.render("phone-home", {active:active});
	});
	
	app.post("/products/addtoCart", function(req,res){
		var comm = global.dbHelper.getModel("commodity");
		var cart = global.dbHelper.getModel("cart");
		comm.findOne({id:req.body.data}, function(err,doc){
			if(doc){
				//console.log(doc);
				cart.create({
					cId: doc.id,
					cName: doc.name,
					cPrice: doc.price,
					cImgSrc: doc.imgSrc
				},function(err,doc){
					res.send(req.body.data);
				});
			}else{
				res.sendStatus(500);
			}
		});
	});
}