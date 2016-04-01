'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

	PlaylistFactory.fetchAll()
	.then(function(data){
		$scope.playListNames = data;
	});




  // nothing to see here for now… state transitions happening with ui-sref!

});
