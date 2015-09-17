(function() {
  'use strict';

  angular.module('template')

  .service('StudentService', function(lodash, State, ContactService){
    var self = this;
    var _ = lodash;
    var data = [];
    var list = [];

    self.init = function(data, list){
      self.setData(data);
      self.setList(list);
    }

    self.setData = function(d){
      data = d;
    }

    self.setList = function(l){
      list = l;
    }

    self.getList = function(){
      return list;
    }

    self.setActive = function(selected){
      var _id = selected._id;
      // The selected student exists in the list.
      // Search for that student in the data array by _id
      // if not found, get the student from the DB via the API
      var selectedStudent = _.find(data, {'_id': _id})
      if (!selectedStudent){
        console.log('>> Need to >> search db for this student')
      }
      State.activeStudent = selectedStudent;
      ContactService.formatActiveStudent();
    }
  })
})();
