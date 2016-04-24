var app = angular.module('agendaEditor', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/home',
			controller: 'homeController'
		});
});

