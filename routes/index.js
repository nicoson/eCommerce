module.exports = function(app){
	require("./login")(app);
	require("./register")(app);
	require("./commodityInit")(app);
	require("./products")(app);
	require("./cart")(app);
};