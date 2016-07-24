angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/about', {
				templateUrl: 'about/about.html',
				controller: 'aboutController'
			})
	})
	
	.controller('aboutController', function($scope) {

	});