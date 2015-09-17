(function() {
  'use strict';

  angular.module('template')

  .service('DataService', function($q, $log, StudentResource){
    var self = this;

    self.loadStudents = function(callback){
      var dataAsync = StudentResource.list.get().$promise;
      var listAsync = StudentResource.data.get().$promise;
      fetchAndLoadData(dataAsync, listAsync, callback);
    };

    self.loadOutreachLogs = function(){
      //coming soon!
      console.log('>> Need to >> load outreach logs')
    }();

    self.loadFixtures = function() {
      //coming soon!
      console.log('>> Need to >> load fixtures')
    }();

    function fetchAndLoadData(dataAsync, listAsync, callback){
      $q.all([dataAsync, listAsync]).then(function(ret){
        var dataObj = {};
        dataObj.list = ret[0];
        dataObj.data = ret[1];
        callback(null, dataObj);
      }, function(err){
        callback(err);
      });
    }
  })
})();
