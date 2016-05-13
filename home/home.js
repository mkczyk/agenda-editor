angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController'
			});
	})

	.controller('homeController', function($scope, Agenda, dragulaService) {
		$scope.agenda = Agenda;

		dragulaService.options($scope, 'items-bag', {
			moves: function (el, container, handle) {
				return handle.classList.contains('handle');
			}
		});

		$scope.addEmptyItem = function(){
			Agenda.list.push({title: "", name: "", surname: ""});
		};
	});
