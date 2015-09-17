(function() {
  'use strict';

  angular.module('NvApiService')

  .factory('OutreachLogResource', function($resource) {
    var OutreachResource = function(){};

    OutreachResource.data = $resource('/assets/fixtures/studentData.json', null, {
      get: {
        method: 'GET',
        isArray: true
      }
    });

    return OutreachResource;
  });
})();
