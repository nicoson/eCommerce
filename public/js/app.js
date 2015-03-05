angular.module('phonecat',['ngRoute','myControllers']).config(function($routeProvider){
	$routeProvider.
	when('/phonelist', {
		templateUrl: 'branch/Phone-list.html',
		controller: 'PhoneListCtrl'
		}).
	when('/phonedetail/:phoneId', {
		templateUrl:"branch/Phone-detail.html",
		controller: 'PhoneDetailCtrl'
		}).
	otherwise({redirectTo:'/phonelist'});
});