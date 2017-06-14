// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('navBarDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/dirViews/navBarTmpl.html',
    controller: 'homeCtrl'
  };
});
