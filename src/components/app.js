angular.module('video-player')

  .component('app', {
    
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.selected = this.videos[0];
      
      this.onClick = (video) => {
        this.selected = video;
      };
      
      this.getSearchQuery = (query) => {        
        youTube.search(query, (videos) => {
          this.videos = videos;
          this.selected = videos[0];
        });
      };     
    },
    
    
    templateUrl: 'src/templates/app.html'
  });
