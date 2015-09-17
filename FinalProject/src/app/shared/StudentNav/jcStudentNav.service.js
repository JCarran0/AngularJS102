// (function() {
//   'use strict';

//   angular.module('StudentNavModule', ['NvApiService'])

//   .service('StudentNavService', function(){
//     var self = this;
//     self.index = 0;

//     // self.setIndex = function(selected){
//     //   self.index = self.state.list.indexOf(selected);
//     //   StudentService.setActive(self.index);
//     //   // $rootScope.$broadcast('newStudentLoaded');
//     // };

//     self.next = function(){
//       self.index ++;
//       if(self.index === self.state.data.length){
//         self.index = 0;
//       }
//       StudentService.setActive(self.index);
//     };

//     self.previous = function(){
//       self.index --;
//       if(self.index === -1){
//         self.index = self.state.data.length-1;
//       }
//       StudentService.setActive(self.index);
//     };
//   });
// })();
