angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/result', {
				templateUrl: 'result/result.html',
				controller: 'resultController'
			});
	})

	.controller('resultController', function($scope, Agenda) {
		$scope.agenda = Agenda;
	});