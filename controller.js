var app = angular.module('agendaEditor', []);
 
app.controller('formCtrl', function($scope) {
	$scope.list = [];
  
	$scope.list.push({title: "", name: "", surname: ""});

	$scope.myResult = function () {
		var result = [];
		for (var i = 0; i < $scope.list.length; i++) {
			var concat = "„" + $scope.list[i].title + "” – " + $scope.list[i].name + " " + $scope.list[i].surname;
			if($scope.list[i].title !== ""){
				result.push(concat);
			}
		}
		return result;
	};
	
	$scope.addItem = function(){
        $scope.list.push({title: "", name: "", surname: ""});
	};
});