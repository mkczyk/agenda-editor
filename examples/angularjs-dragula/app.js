var app = angular.module('agendaEditor', ['ngRoute', angularDragula(angular)]);


app.config(function($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/home',
			controller: 'homeController'
		});
});

