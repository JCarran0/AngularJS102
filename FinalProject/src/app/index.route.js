(function() {
  'use strict';

  angular
    .module('template')
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
      })
      .state('editMode', {
        url: '/edit',
        templateUrl: 'app/editContacts/edit.html',
      })
      .state('viewMode', {
        url: '/view',
        templateUrl: 'app/viewContacts/view.html',
      });

    $urlRouterProvider.otherwise('/');
  });

})();
