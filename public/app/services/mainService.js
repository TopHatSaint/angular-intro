// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getCollections = function() {
    return $http({
      method: 'GET',
      url: '/api/collection'
    }).then(function(response) {
      
    });
  };


});
