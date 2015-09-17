(function() {
  'use strict';

  angular
    .module('template')
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('master', {
        url: '/m',
        templateUrl: 'app/shared/master/master.view.html',
        controller: 'MasterController',
        controllerAs: 'ctrl'
      })
      .state('master.content', {
        url: '/content',
        templateUrl: 'app/components/content/content.view.html',
        controller: 'ContentController',
        controllerAs: 'ctrl'
      })
      .state('master.content.logOutreach', {
        url: '/log-outreach',
        templateUrl: 'app/components/content/outreach/log/log.view.html',
        controller: 'LogOutreachController',
        controllerAs: 'ctrl'
      })
      .state('master.content.outreachHistory', {
        url: '/outreach-history',
        templateUrl: 'app/components/content/outreach/history/history.view.html',
        controller: 'ViewHistoryController',
        controllerAs: 'ctrl'
      })
      .state('master.content.studentData', {
        url: '/student-data',
        templateUrl: 'app/components/content/outreach/data/data.view.html',
        controller: 'StudentDataController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/m/content/log-outreach');
  });

})();
