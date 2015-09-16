(function() {
  'use strict';

  angular.module('NvApiService', [])

  .factory('StudentResource', function($resource) {
    var StudentResource = function(){};

    // This will be swapped out with true API call
    StudentResource.list = $resource('/assets/fixtures/studentList.json', null, {
      get: {
        method: 'GET',
        isArray: true
      }
    });
    // This will be swapped out with true API call
    StudentResource.data = $resource('/assets/fixtures/studentData.json', null, {
      get: {
        method: 'GET',
        isArray: true
      }
    });

    return StudentResource;
  })

  .factory('OutreachResource', function($resource) {
    var OutreachResource = function(){};

    OutreachResource.list = $resource('/assets/fixtures/studentList.json', null, {
      get: {
        method: 'GET',
        isArray: true
      }
    });

    OutreachResource.data = $resource('/assets/fixtures/studentData.json', null, {
      get: {
        method: 'GET',
        isArray: true
      }
    });

    return OutreachResource;
  })


  ;




})();
