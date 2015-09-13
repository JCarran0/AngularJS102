(function() {
  'use strict';

  angular.module('StudentNavModule', ['StudentFetchService'])

  .service('StudentNavService', function($q, $log, $rootScope, GetStudentsResource, TEMPDATA){
    var self = this;
    //temp data - will come from API call to db
    var data = TEMPDATA;

    var index = 0;
    self.state = {};
    // self.state.list = [];
    // self.state.data = [];

    self.loadStudents = function(callback){
      self.state.list = angular.copy(data);
      self.state.data = angular.copy(data);
      setSelected();
      if (callback) callback();
    }

    self.setIndex = function(selectedStudent){
      index = self.state.list.indexOf(selectedStudent);
      $rootScope.$broadcast('newStudentLoaded');
    };

    function setSelected(){
      self.state.selectedStudent = self.state.list[index];
      $rootScope.$broadcast('newStudentLoaded');
    }

    self.next = function(){
      index ++;
      if(index === data.length){
        index = 0;
      }
      setSelected();
    };

    self.previous = function(){
      index --;
      if(index === -1){
        index = self.state.list.length-1;
      }
      setSelected();
    };







    // self.load = function(){

    // var apiCall1 = GetStudentsResource.getStudents().$promise;
    // var apiCall2 = GetStudentsResource.getStudents().$promise;

    // $q.all([apiCall1, apiCall2]).then(function(ret){
    //     console.log(ret.length + ' docs fetched successfully');
    //     self.state.list.length = 0; // clear existing array
    //     self.state.data.length = 0;

    //     self.state.list.push.apply(self.state.list, ret[0].data); // Push data to initial arrays
    //     self.state.data.push.apply(self.state.data, ret[1].data); // Push data to initial arrays

    //     console.log('self.state.list', self.state.list)
    //     setSelected();
    //   })
    // }
    // self.load();

  })

  .value('TEMPDATA', [
    {
        "_id": "90998754796B049",
        "studentId": 909987547,
        "schoolId": "96B049",
        "studentDetails": {
            "first": "Jared",
            "last": "Carrano",
            "email": "email"
        },
        "additionalContactDetails": {
          "altContacts": [{
            first: 'Joj',
            last: 'Contreras',
            phone: '555 444 3221'
          }],
          "atsMetaData": {
            "adult1": {
              "email": 'testEmail@email.com',
              "numberIsBad": true
            },
            "adult2": {},
            "adult3": {},
            "home": {}
          }
        },
        "atsContacts": {
            "home": {
                "street": "205 street",
                "apt": "3A",
                "city": "brooklyn",
                "zip": 11300,
                "email": "email@email.com",
                "phone": "222-222-2304"
            },
            "adult1": {
                "first": "ad1first",
                "last": "ad1last",
                "phone": "333-333-3415"
            },
            "adult2": {
                "first": "ad2first",
                "last": "ad2last",
                "phone": "444-444-4526"
            },
            "adult3": {
                "first": "ad3first",
                "last": "ad3last",
                "phone": "555-555-5637"
            }
        }
    },
    {
        "_id": "90998754896B049",
        "studentId": 909987548,
        "schoolId": "96B049",
        "studentDetails": {
            "first": "Danielle",
            "last": "Scaramellino",
            "email": "email"
        },
        "additionalContactDetails": {
          "altContacts": [],
          "atsMetaData": {
            "adult1": {
              "numberIsBad": true
            },
            "adult2": {},
            "adult3": {},
            "home": {
              "numberIsBad": true
            }
          }
        },
        "atsContacts": {
            "home": {
                "street": "6th Ave",
                "apt": "24",
                "city": "Manhattan",
                "zip": 10014,
                "email": "email@email.com",
                "phone": "202-555-4943"
            },
            "adult1": {
                "first": "paul",
                "last": "carrano",
                "phone": "203-555-1234"
            },
            "adult2": {
                "first": "diane",
                "last": "carrano",
                "phone": "203-555-1234"
            },
            "adult3": {
                "first": "ad3first",
                "last": "ad3last",
                "phone": "555-555-5637"
            }
        }
    }
])

})();
