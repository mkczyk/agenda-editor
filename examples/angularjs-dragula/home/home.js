angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController'
			});
	})

	.controller('homeController', function($scope, Agenda) {
		$scope.agenda = Agenda;
		
		$scope.addEmptyItem = function(){
			Agenda.list.push({title: "", name: "", surname: ""});
		};
	});