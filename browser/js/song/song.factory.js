'use strict';

juke.factory('SongFactory', function ($http) {

  return {

  	fetchAllSongs: function(){
  	 	return $http.get('/api/songs')
  	 	.then(function(response){
  	 		return response.data ;
  	 	});
  	},

    convert: function (song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
      return song;
    }
  };

});
