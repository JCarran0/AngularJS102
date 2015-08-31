(function() {
  'use strict';

  angular.module('template')

  .controller('ViewController', function (StudentNavService) {
    var self = this;

    self.home = {};

    StudentNavService.load(function(){
      self.list = StudentNavService.list;
      self.data = StudentNavService.data;
      self.index = StudentNavService.index;
      self.selected = self.data[self.index];
      formatStudent();

      // Why do it this way?
      self.next = function(){
        self.index = StudentNavService.next();
        self.selected = self.data[self.index];
        formatStudent();
        console.log(self.index)
      }
      self.previous = function(){
        self.index = StudentNavService.previous();
        self.selected = self.data[self.index];
        formatStudent();
        console.log(self.index)
      }

      self.setSelected = function(index){
        self.index = StudentNavService.setIndex(index);
        self.selected = self.data[self.index];
        formatStudent();
      }

      //Instead of this way
      // I.e. self.index isn't 'connected' to the StudentNavService
      // self.next = StudentNavService.next;
      // self.previous = StudentNavService.previous;
      // self.next = StudentNavService.next;  // George, why doesn't this work?
      // self.previous = StudentNavService.previous;



      function formatStudent(){
        var stdnt = self.selected;
        var ats = stdnt.atsContacts;
        var home = ats.home;
        var street = home.street;
        street = home.apt ? street + ' ' + home.apt : street;
        stdnt.address = toTitleCase(street + ', ' + home.city + ', NY ' + home.zip);
        stdnt.phone = home.phone;
        stdnt.email = home.email;
        stdnt.ats = ats;
      }

      function toTitleCase(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      // Toggle self[field].editActive
      self.toggleEdit = function(editFlag){
        console.log('clicked')
        console.log(typeof editFlag);
        self[editFlag].editActive = self[editFlag].editActive === true ? false : true;
      }
    });



  });

})();
