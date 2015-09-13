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
        templateUrl: 'app/components/home/outreach/log/log.view.html',
        controller: 'LogOutreachController',
        controllerAs: 'ctrl'
      })
      .state('home.outreachHistory', {
        url: '/outreach-history',
        templateUrl: 'app/components/home/outreach/history/history.view.html',
        controller: 'ViewHistoryController',
        controllerAs: 'ctrl'
      })
      .state('home.studentData', {
        url: '/student-data',
        templateUrl: 'app/components/home/outreach/data/data.view.html',
        controller: 'StudentDataController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/home/log-outreach');
  });

})();
