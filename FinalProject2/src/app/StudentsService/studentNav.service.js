(function() {
  'use strict';

  angular.module('StudentNavModule', ['StudentFetchService'])

  .service('StudentNavService', function($q, StudentResource){
    var self = this;

    //temp data - will come from API call to db
    var data = [{
      first: 'jared',
      last: 'carrano',
      phone: '4238942389',
      email: 'jcarrano@newvisions.org',
      address: '89 Butler St'
    },
    {
      first: 'danielle',
      last: 'scaramellino',
      phone: '43243234',
      email: 'dscaramellino@newvisions.org',
      address: '320 W 13th Street'
    },
    {
      first: 'joj',
      last: 'contreras',
      phone: '434243224',
      email: 'jcontre3@newvisions.org',
      address: '89 Butler Street'
    }];

    self.list = angular.copy(data);
    self.data = angular.copy(data);
    var index = 0;
    self.state = {};
    self.state.selectedStudent = self.list[index];

    self.setSelected = function(selectedStudent){
      index = self.list.indexOf(selectedStudent);
    }

    self.next = function(){
      index ++;
      if(index === data.length){
        index = 0;
      }
      self.state.selectedStudent = self.list[index];
    };

    self.previous = function(){
      index --;
      if(index === -1){
        index = self.list.length-1;
      }
      self.state.selectedStudent = self.list[index];
    };

    // self.load = function(callback){

    // var apiCall1 = StudentResource.getStudents().$promise;
    // var apiCall2 = StudentResource.getStudents().$promise;

    // $q.all([apiCall1, apiCall2]).then(function(ret){
    //     console.log(ret.length + ' docs fetched successfully');
    //     Nav.list.length = 0; // clear existing array
    //     Nav.data.length = 0;

    //     Nav.list.push.apply(Nav.list, ret[0].data); // Push data to initial arrays
    //     Nav.data.push.apply(Nav.data, ret[1].data); // Push data to initial arrays

    //     angular.extend(self.selectedStudent, Nav.list[Nav.index]);
    //     angular.extend(self.selectedStudentData, Nav.data[Nav.index]);
    //     console.log(self.selectedStudentData)
    //     callback();
    //   })
    // },


  })

})();
