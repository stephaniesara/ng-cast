angular.module('video-player')

  .component('search', {
    bindings: {
      onSearch: '<',
      onToggle: '<',
      autoplay: '<'
    },
    
    templateUrl: 'src/templates/search.html'
  });
