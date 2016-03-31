'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('playlists', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl'
    });
  });