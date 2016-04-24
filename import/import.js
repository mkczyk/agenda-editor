angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/import', {
				templateUrl: 'import/import.html',
				controller: 'importController'
			})
	})
	
	.controller('importController', function($scope) {

	});