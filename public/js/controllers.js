
angular.module('myControllers', [])

// .controller("PhoneListCtrl", ["$scope", function($scope){
// 	$scope.phones = [
// 		{"name":"Nexus S", "snippet": "Fast just got faster with Nexus S.", "age": 1, "imageUrl":"../Image/eraser.png"},
// 		{"name":"Samsume X", "snippet": "Fast just got faster with Samsume X.", "age": 0, "imageUrl":"../Image/paint.png"},
// 		{"name":"Apple M", "snippet": "Fast just got faster with Apple M.", "age": 3, "imageUrl":"../Image/cycle.png"}
// 	];
// 	//$scope.query = "Nexus";
// 	$scope.orderProp = "age";
// }])
.controller("PhoneListCtrl", ["$scope", "$http", function($scope, $http){
	$http.get('phonetxt/phones.json').success(function(data){
		$scope.phones = data;
	});

	$scope.query = "";
	$scope.orderProp = "age";
}])

// .controller("PhoneDetailCtrl", ["$scope", function($scope, $routeProvider){
// 	$scope.phoneId = $routeParams.phoneId;
// }]);

.controller("PhoneDetailCtrl", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http){
	$http.get("phonetxt/"+ $routeParams.phoneId +".json").success(function(data){
		$scope.phone = data;
		$scope.mainImageUrl = data.images[0];
	})

	$scope.setImage = function(imageUrl){
		$scope.mainImageUrl = imageUrl;
	}
}]);