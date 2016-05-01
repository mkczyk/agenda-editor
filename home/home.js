angular.module('agendaEditor')

	.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController'
			});
	})

	.controller('homeController', function($scope) {
		$scope.list = [];
	  
		$scope.list.push({title: "", name: "", surname: "", time: ""});

		$scope.myResult = function () {
			var result = [];
			
			if($scope.startTime !== "") {
				var lastTime = $scope.startTime;
				for (var i = 0; i < $scope.list.length; i++) {
					if($scope.list[i].title !== "" && $scope.list[i].time  !== "" && $scope.list[i].time !== undefined){
						var endTime = addTime(lastTime, $scope.list[i].time);
						var concat = lastTime + "–" + endTime + " „" + $scope.list[i].title + "” – " + $scope.list[i].name + " " + $scope.list[i].surname;
						result.push(concat);
						lastTime = endTime;
					}
				}
			}
			
			return result;
		};
		
		$scope.addItem = function(){
			$scope.list.push({title: "", name: "", surname: ""});
		};
		
		function addTime(start, time) {
			var now = new Date();
			now.setHours(start.split(":")[0]);
			now.setMinutes(start.split(":")[1]);
			now.setHours(now.getHours()+parseInt(time.split(":")[0]));
			now.setMinutes(now.getMinutes()+parseInt(time.split(":")[1]));
			var hours = (now.getHours()<10?'0':'') + now.getHours();
			var minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
			return hours + ":" + minutes;
		};
	});