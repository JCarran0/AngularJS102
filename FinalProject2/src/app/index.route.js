(function() {
  'use strict';

  angular
    .module('template')
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('view', {
        url: '/view',
        templateUrl: 'app/ViewContacts/view.html',
        controller: 'ViewController',
        controllerAs: 'ctrl'
      })
      .state('view.logOutreach', {
        url: '/logOutreach',
        templateUrl: 'app/logOutreach/logOutreach.html',
        controller: 'LogOutreachController',
        controllerAs: 'ctrl'
      })
      .state('view.outreachHistory', {
        url: '/outreachHistory',
        templateUrl: 'app/outreachHistoryView/outreachHistory.html',
      })
      .state('view.studentData', {
        url: '/studentData',
        templateUrl: 'app/studentDataView/studentData.html'
      });

    $urlRouterProvider.otherwise('/view/logOutreach');
  });

})();
