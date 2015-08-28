(function() {
  'use strict';

  angular.module('template')

  .controller('NavController', function (StudentNavService) {
    var self = this;

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
  });
})();
