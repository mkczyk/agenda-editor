var app = angular.module('agendaEditor', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
	
		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'homeController'
		})
		
		.when('/import', {
			templateUrl: 'pages/import.html',
			controller: 'importController'
		})
		
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		})
		

		.otherwise({
			redirectTo: '/home',
			controller: 'homeController'
		});
});

