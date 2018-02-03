angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(options, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: options.key,
          part: 'snippet',
          q: options.query,
          maxResults: options.max,
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
