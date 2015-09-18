(function() {
  'use strict';

  angular.module('NvApiService')

  .factory('OutreachLogResource', function($resource) {
    var OutreachResource = function(){};

    OutreachResource.byStudent = $resource('/assets/fixtures/logsCollection.json', {}, {
      get: {
        method: 'GET',
        isArray: true
      }
    });

    return OutreachResource;
  });
})();
