(function() {
  'use strict';

  angular.module('template')

  .controller('MainController', function (StudentNavService) {
    var self = this;

    StudentNavService.load(function(){
      self.list = StudentNavService.list;
      self.data = StudentNavService.data;
      self.index = StudentNavService.index;
      self.selected = self.data[self.index];

      // Why do it this way?
      self.next = function(){
        self.index = StudentNavService.next();
        self.selected = self.data[self.index];
        console.log(self.index)
      }
      self.previous = function(){
        self.index = StudentNavService.previous();
        self.selected = self.data[self.index];
        console.log(self.index)
      }

      self.setSelected = function(index){
        self.index = StudentNavService.setIndex(index);
        self.selected = self.data[self.index];
      }

      //Instead of this way
      // I.e. self.index isn't 'connected' to the StudentNavService
      // self.next = StudentNavService.next;
      // self.previous = StudentNavService.previous;
      // self.next = StudentNavService.next;  // George, why doesn't this work?
      // self.previous = StudentNavService.previous;
    });



  });

})();
