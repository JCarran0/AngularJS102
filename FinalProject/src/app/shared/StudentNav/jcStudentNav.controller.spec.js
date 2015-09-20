// (function(){
//   'use strict';
//   beforeEach(module('template')); // Name of the module my directive is in

//   describe('jcStudentNav.directive', function(){
//     var element, scope, $compile;

//     beforeEach(module('app/shared/studentNav/jcStudentNav.html')); // The external template file referenced by templateUrl

//     beforeEach(inject(function(_$compile_, $rootScope) {
//       scope = $rootScope;
//       $compile = _$compile_;
//     }));

//     it("initializes correctly", function () {
//         // Test whether an empty address is formatted correctly
//         // Fields could be empty strings, or nulls
//         scope.ctrl = {
//           displayList: [{one: 1},{two: 2}]
//         }

//         // Create an instance of the directive
//         element = angular.element('<jc-student-nav on-update="ctrl.onUpdate(selectedStudent)" display-list="ctrl.displayList"></jc-student-nav>');
//         $compile(element)(scope); // Compile the directive
//         // scope.$digest(); // Update the HTML

//         // Get the isolate scope for the directive
//         var isoScope = element.isolateScope();
//         console.log(isoScope)
//         // Make our assertions
//         expect(isoScope).toBeDefined();
//     });


//   });

// })()



// (function() {
//   'use strict';

//   beforeEach(function(){
//     module('template');
//   });

//   describe('StudentNavController', function(){
//     var StudentNavController;
//     beforeEach(inject(function($controller){
//       StudentNavController = $controller('StudentNavController');
//       StudentNavController.displayList = [{test: "test"}]
//     }));

//     it('test', function(){
//       console.log('ctrl', ctrl)
//     })

//   });

// })();




