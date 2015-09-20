(function() {
  'use strict';

  angular.module('StudentNavModule')

  .controller('StudentNavController', function (){
    var self = this;
    self.index = 0;

    self.setIndex = function(selected){
      self.index = self.displayList.indexOf(selected);
      self.setSelectedStudent(self.index);
    };

    self.next = function(){
      self.index ++;
      if(self.index === self.displayList.length){
        self.index = 0;
      }
      self.setSelectedStudent(self.index);
    };

    self.previous = function(){
      self.index --;
      if(self.index === -1){
        self.index = self.displayList.length-1;
      }
      self.setSelectedStudent(self.index);
    };

    self.setSelectedStudent = function(index){
      self.selectedStudent = self.displayList[index];
      self.onUpdate({selectedStudent: self.selectedStudent});
    };

    self.setSelectedStudent(self.index);
  });
})();
