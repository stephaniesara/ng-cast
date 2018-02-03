angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyAkHJ2FyNSMeyfoU8-g5ZJPfZLupgvO8Bw',
          part: 'snippet',
          q: query,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: 'true'
        }
      }).then(function successCallback(response) {
        console.log('success!');
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('error!');
      });
    };
    
  });
