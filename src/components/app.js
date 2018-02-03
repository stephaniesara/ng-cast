angular.module('video-player')

  .component('app', {
    
    controller: function(youTube) {
      this.videos = [];
      this.selected = {};
      this.key = window.YOUTUBE_API_KEY;
      this.autoplay = 0;
      
      this.onClick = (video) => {
        this.selected = video;
      };
      
      this.getSearchQuery = (query) => {        
        var options = {
          key: this.key,
          query: query,
          max: 5
        };
        youTube.search(options, (videos) => {
          this.videos = videos;
          this.selected = videos[0];
        });
      };

      this.getSearchQuery('tiny homes');    
      
      this.toggleAutoplay = () => {
        this.autoplay = Number(!this.autoplay);
      };
    },
    
    
    templateUrl: 'src/templates/app.html'
  });
