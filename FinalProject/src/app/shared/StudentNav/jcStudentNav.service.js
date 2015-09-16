(function() {
  'use strict';

  angular.module('StudentNavModule', ['NvApiService'])

  .service('StudentNavService', function($q, $log, $rootScope, StudentResource, Fixtures){
    var self = this;

    self.index = 0;
    self.state = {};
    self.state.list = [];
    self.state.data = [];

    self.setIndex = function(selectedStudent){
      self.index = self.state.list.indexOf(selectedStudent);
      $rootScope.$broadcast('newStudentLoaded');
    };

    function setSelected(){
      self.state.selectedStudent = self.state.list[self.index];
      $rootScope.$broadcast('newStudentLoaded');
    }

    self.next = function(){
      self.index ++;
      if(self.index === self.state.data.length){
        self.index = 0;
      }
      setSelected();
    };

    self.previous = function(){
      self.index --;
      if(self.index === -1){
        self.index = self.state.data.length-1;
      }
      setSelected();
    };

    self.loadStudents = function(callback){
      var dataAsync = StudentResource.list.get().$promise;
      var listAsync = StudentResource.data.get().$promise;
      fetchAndLoadData(dataAsync, listAsync, callback);
    };

    self.loadFixtures = function() {
      self.state.list.push.apply(self.state.list, Fixtures.studentList); // Push data to initial arrays
      self.state.data.push.apply(self.state.data, Fixturs.studentData);
    };

    function fetchAndLoadData(dataAsync, listAsync, callback){
      $q.all([dataAsync, listAsync]).then(function(ret){
        self.state.list.length = 0; // clear existing array
        self.state.data.length = 0;

        self.state.list.push.apply(self.state.list, ret[0]); // Push data to initial arrays
        self.state.data.push.apply(self.state.data, ret[1]); // Push data to initial arrays
        setSelected();

        if (callback) {
          callback();
        }
      });
    }
  });
})();
