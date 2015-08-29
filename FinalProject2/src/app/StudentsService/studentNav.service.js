(function() {
  'use strict';

  angular.module('StudentNavModule', ['StudentFetchService'])

  .factory('StudentNavFactory', function(){
    function StudentNavFactory(){
      this.index = 0;
      this.list = [];
      this.data = [];
    }
    return StudentNavFactory;
  })

  .service('StudentNavService', function($q, StudentNavFactory, StudentResource){

    var Nav = new StudentNavFactory();

    return {
      list: Nav.list,
      data: Nav.data,
      index: Nav.index,
      load: function(callback){

        var apiCall1 = StudentResource.getStudents().$promise;
        var apiCall2 = StudentResource.getStudents().$promise;

        $q.all([apiCall1, apiCall2]).then(function(ret){
          console.log(ret.length + ' docs fetched successfully');
          Nav.list.length = 0; // clear existing array
          Nav.data.length = 0;

          Nav.list.push.apply(Nav.list, ret[0]); // Push data to initial arrays
          Nav.data.push.apply(Nav.data, ret[1]); // Push data to initial arrays
          callback(); // return initial student
        })
      },

      next: function(){
        Nav.index ++;
        console.log(Nav.index);
        return Nav.index;
      },

      previous: function(){
        Nav.index --;
        console.log(Nav.index);
        return Nav.index;
      },

      setIndex: function(index){
        Nav.index = index;
        return Nav.index;
      }
    };
  })

})();
