(function() {
  'use strict';

  angular.module('StudentNavModule')

  .controller('StudentNavController', function () {
    var self = this;
    var index = 0;

    self.setIndex = function(selected){
      index = self.displayList.indexOf(selected);
      self.onUpdate({selectedStudent: selected});
    };

    self.next = function(){
      index ++;
      if(index === self.displayList.length){
        index = 0;
      }
      setSelectedStudent(index);
    };

    self.previous = function(){
      index --;
      if(index === -1){
        index = self.displayList.length-1;
      }
      setSelectedStudent(index);
    };

    var setSelectedStudent = function(index){
      self.selectedStudent = self.displayList[index];
      self.onUpdate({selectedStudent: self.selectedStudent});
    }
  });

})();
