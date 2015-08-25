(function() {
  'use strict';

  angular.module('template')

  .controller('ViewController', function (StudentsResource) {
    var self = this;

    self.getStudents = function(){
      console.log('getting students');
      StudentsResource.getStudents().$promise.then(function(students){
        console.log(students);
        self.students = students;
        self.selectedStudent = students[0];
      })
    }

    // self.oneAtATime = true;

    self.addItem = function() {
      var newItemNo = self.items.length + 1;
      self.items.push('Item ' + newItemNo);
    };

    self.isOpen = { home: true };
    self.getStudents();
  });

})();
