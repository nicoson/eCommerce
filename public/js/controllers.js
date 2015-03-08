
angular.module('myControllers', [])

.controller("PhoneListCtrl", ["$scope", "$http", function($scope, $http){
	$http.get('phonetxt/phones.json').success(function(data){
		$scope.phones = data;
	});

	$scope.query = "";
	$scope.orderProp = "price";
	// $scope.test = "ha";

	$scope.addtoCart = function(data){
		//$scope.test = $scope.phones[index].name;
		$http.post("/products/addtoCart", {data:data}).success(function(data){
			// $scope.test = data;
		});
	}
}])

.controller("PhoneDetailCtrl", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http){
	$http.get("phonetxt/"+ $routeParams.phoneId +".json").success(function(data){
		$scope.phone = data;
		$scope.mainImageUrl = data.images[0];
	})

	$scope.setImage = function(imageUrl){
		$scope.mainImageUrl = imageUrl;
	}
}])

.controller("cartCtr", ["$scope", "$http", function($scope, $http){
	$scope.test = "kk";
	$scope.deleItem = function(data){
		$scope.test = data;
		$http.post("/cart/deleItem", {data:data}).success(function(data){

		});
	}
}]);