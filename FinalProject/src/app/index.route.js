(function() {
  'use strict';

  angular
    .module('template')
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      })
      .state('home.logOutreach', {
        url: '/log-outreach',
        templateUrl: 'app/components/outreach/log/log.view.html',
        controller: 'LogOutreachController',
        controllerAs: 'ctrl'
      })
      .state('home.outreachHistory', {
        url: '/outreach-history',
        templateUrl: 'app/components/outreach/history/history.view.html',
      })
      .state('home.studentData', {
        url: '/student-data',
        templateUrl: 'app/components/outreach/data/data.view.html'
      });

    $urlRouterProvider.otherwise('/log-outreach');
  });

})();
