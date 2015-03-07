var fs = require("fs");

module.exports = function(app){
	app.get("/commodityInit", function(req,res){
		var comm = global.dbHelper.getModel("commodity");
		var tempfile = JSON.parse(fs.readFileSync("public/phonetxt/phones.json"));
		comm.findOne({}, function(err,doc){
			if(doc){
				res.sendStatus(200);
			}else{
				tempfile.forEach(function(file){
					comm.create({
						id: file.id,
						name: file.name,
						price: file.price,
						imgSrc: file.imageUrl
					}, function(err,doc){
						if(err) res.sendStatus(500);
					});
				});
				res.sendStatus(200);
			}
		});
	});
}