angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController'
			});
	})

	.controller('homeController', function($scope, Agenda) {
		$scope.model = Agenda.model;
		$scope.list = Agenda.list;
		$scope.myResult = Agenda.myResult;
		
		$scope.addEmptyItem = function(){
			$scope.list.push({title: "", name: "", surname: ""});
		};
	});