app.controller('mailctrl', ['$scope','$http',function($scope,$http) {
	var BASE_URL = 'http://localhost:8080/UniteUpRestServices';
	
	$scope.mailus=function(){
		$http({
			method : 'GET',
		}).success(function(data, status, headers, config) {
			alert(none);
		}).error(function(data, status, headers, config) {
			alert("Error");
		})
	};
}])