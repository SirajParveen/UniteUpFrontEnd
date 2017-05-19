app.controller('eventctrl', [ '$scope', '$http',function($scope, $http) {
	var BASE_URL = 'http://localhost:8080/UniteUpRestServices';

	$scope.getAllEvents= function() {
		console.log("get all events")
		$http({
			method : 'GET',
			url : BASE_URL+'/listevent'
		}).success(function(data, status, headers, config) {
			$scope.events=data;
			angular.forEach($scope.events, function(value, key){
			      //if(value.Password == "thomasTheKing")
				var user=value.userid
			         console.log(user);
			   });
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	$scope.submit = function() {
		console.log("create event")
		$scope.event = {	
			id:$scope.id,
			name : $scope.name,
			topic : $scope.topic,
			userid:$scope.userid,
			doe:$scope.doe,
			description : $scope.description,
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createevent',
			data : $scope.event
		})
		.success(function(data, status, headers, config) {
		});
	};
	$scope.deleteevent=function(id){
		$http({
			method:'DELETE',
		url:BASE_URL+'/deleteevent/'+id
		}).success(function(data,status,headers,config){
			$scope.getAllEvents();
		})
	};
	$scope.editevent=function(name,topic,doe,description){
		$scope.name=name;
		$scope.topic=topic;
		$scope.doe=doe;
		$scope.description=description;
	};	
	        }]);