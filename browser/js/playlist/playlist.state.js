'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('playlists', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistsCtrl'
    });

  $stateProvider.state('single', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/playlistsingle.html',
    controller: 'PlaylistCtrl',
    resolve: {
      eachPlaylist: function(PlaylistFactory, $stateParams){
        return PlaylistFactory.fetchById($stateParams.playlistId);
      }
    }
    });

  });