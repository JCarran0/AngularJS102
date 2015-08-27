(function() {
  'use strict';

  angular
    .module('template')
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/new');
  });

})();
