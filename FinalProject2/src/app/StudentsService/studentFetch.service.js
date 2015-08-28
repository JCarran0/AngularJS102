(function() {
  'use strict';

  angular.module('StudentFetchService', [])

  .factory('StudentResource', function ($resource) {
    return $resource('/assets/students.json', null, {
      getStudents: {
        method: 'GET',
        isArray: true
      }
    });
  })

})();
