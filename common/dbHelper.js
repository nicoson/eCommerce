var mongoose = require("./mongodb");
var models = require("./models");

var m;
for(m in models){
	mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
	getModel: function(type){
		return mongoose.model(type);
//		return _getModel(type);
	}
};

// var _getModel = function(type){
// 	return mongoose.model(type);
// };