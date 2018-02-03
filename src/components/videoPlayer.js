angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      autoplay: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'    
  });
