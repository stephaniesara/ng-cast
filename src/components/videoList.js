angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    
    controller: function() {
      //this.test = this.videos;
      // console.log(this);
    },
    
    templateUrl: 'src/templates/videoList.html'
  });
