'use strict';

juke.controller('PlaylistCtrl', function (SongFactory, $scope, PlaylistFactory, eachPlaylist) {

	$scope.playlist = eachPlaylist;

	SongFactory.fetchAllSongs()
	.then(function(songs){
		console.log(songs);
		$scope.songs = songs;
	});

	$scope.addSong = function(song){
		$scope.playlist.songs.push(song);
	}



	console.log($scope.playlist);
});