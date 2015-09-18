(function() {
  'use strict';

  angular.module('template')

  .service('DataService', function($q, $log, lodash, StudentResource, OutreachLogResource){
    var self = this;
    var _ = lodash;

    self.loadStudents = function(){
      var deferred = $q.defer();
      var dataAsync = StudentResource.list.get().$promise;
      var listAsync = StudentResource.data.get().$promise;
      $q.all([dataAsync, listAsync]).then(function(ret){
        var dataObj = {};
        dataObj.list = ret[0];
        dataObj.data = ret[1];
        deferred.resolve(dataObj);
      }, function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    self.loadOutreachLogs = function(studentId, callback){
      OutreachLogResource.byStudent.get(studentId).$promise.then(function(allLogs){
        console.log('>> Need to >> refactor once we have a collection and REST enpoint for outreach logs')
        var filteredResults = _.filter(allLogs, function(obj){
          return obj.studentId === studentId;
        });
        callback(null, filteredResults);
      }, function(err){
        callback(err);
      });
    };


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
