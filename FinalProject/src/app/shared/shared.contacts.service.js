(function() {
  'use strict';

  angular.module('template')

  .factory('StudentsResource', function ($resource) {
    return $resource('/assets/students.json', null, {
      getStudents: {
        method: 'GET',
        isArray: true
      }
    });
  })


})();
