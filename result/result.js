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
		//$scope.model = Agenda.model;
		//$scope.list = Agenda.list;
		//$scope.myResult = Agenda.myResult;
	});