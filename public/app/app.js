angular.module("app",['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './views/homeTmpl.html',
      controller: 'homeCtrl'
    })// about STATE
    .state('about', {
      url: '/about',
      templateUrl: './app/routes/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    });


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
