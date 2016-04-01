'use strict';

juke.controller('PlaylistsCtrl', function ($scope, PlaylistFactory, $state) {

		$scope.create = function(data) {
		PlaylistFactory.create(data)
		.then(function(response){
			$scope.playListName.name = "";
			$state.go('single', { playlistId: response._id });
		});
		
	};
	$scope.test = function(){
		console.log({name: $scope.playListName});
	};

});