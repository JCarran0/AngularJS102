(function() {
  'use strict';

  angular
    .module('template')
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('view', {
        url: '/view',
        templateUrl: 'app/viewContacts/view.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/view');
  });

})();
