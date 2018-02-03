angular.module('video-player')

  .component('search', {
    bindings: {
      onSearch: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
