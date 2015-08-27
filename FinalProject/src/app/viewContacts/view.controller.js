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
        formatStudent();
      })
    }

    function formatStudent(){
      var stdnt = self.selectedStudent;
      var ats = stdnt.atsContacts;
      var home = ats.home;
      var street = home.street;
      street = home.apt ? street + ' ' + home.apt : street;
      stdnt.address = toTitleCase(street + ', ' + home.city + ', NY ' + home.zip);
      stdnt.phone = home.phone;
      stdnt.email = home.email;
    }

    function toTitleCase(str){
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    self.getStudents();
  });

})();
