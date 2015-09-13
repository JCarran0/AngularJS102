(function() {
  'use strict';

  angular.module('StudentFetchService', [])

  .factory('GetStudentsResource', function ($resource, STUDENTS_API) {
    return $resource(STUDENTS_API.devApiEndpoint, null, {
      getStudents: {
        method: 'GET',
        headers: {
          'Authorization': STUDENTS_API.devAuthToken
        },
        isArray: false
      }
    });
  });

})();