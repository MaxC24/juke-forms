'use strict';

juke.controller('PlaylistCtrl', function ($scope) {

	$scope.empty = false;
	console.log($scope.empty);
	
	$scope.check = function(){
		$scope.empty = ($scope.playListName.length === 0);
		console.log($scope.empty);
	}

});
