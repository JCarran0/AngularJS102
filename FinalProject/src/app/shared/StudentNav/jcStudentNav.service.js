// (function() {
//   'use strict';

//   angular.module('StudentNavModule')

//   .service('JcStudentNavService', function(){
//     var self = this;
//     var index = 0;
//     var listState = {};

//     // I really want to get rid of this service.  The only
//     // reason I need it is to be able to call setSelectedStudent()
//     // from Master.controller after the student data comes back from the API

//     self.setIndex = function(selected){
//       index = self.listState.displayList.indexOf(selected);
//     };

//     self.next = function(){
//       index ++;
//       if(index === self.listState.displayList.length){
//         index = 0;
//       }
//       return self.setSelectedStudent(index);
//     };

//     self.previous = function(){
//       index --;
//       if(index === -1){
//         index = self.listState.displayList.length-1;
//       }
//       return self.setSelectedStudent(index);
//     };

//     self.setSelectedStudent = function(index){
//       return self.listState.displayList[index];
//     }
//   });
// })();
