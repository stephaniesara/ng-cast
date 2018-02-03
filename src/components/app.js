angular.module('video-player')

  .component('app', {
    
    controller: function() {
      this.videos = window.exampleVideoData;
      this.selected = this.videos[0];
      
      this.onClick = (video) => {
        this.selected = video;
      };
    },
    
    
    templateUrl: 'src/templates/app.html'
  });
