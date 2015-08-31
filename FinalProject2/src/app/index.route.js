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
      .state('logOutreach', {
        url: '/view/logOutreach',
        // name: 'childViews',
        templateUrl: 'app/logOutreach/logOutreach.html',
        controller: 'LogOutreachController',
        controllerAs: 'ctrl'
      })
      .state('outreachHistory', {
        url: '/view/outreachHistory',
        name: 'childViews',
        templateUrl: 'app/ViewContacts/partials/outreachHistory.html',
      })
      .state('view.studentData', {
        url: '/view/studentData',
        name: 'childViews',
        templateUrl: 'app/ViewContacts/partials/studentData.html'
      });

    $urlRouterProvider.otherwise('/view');
  });

})();
