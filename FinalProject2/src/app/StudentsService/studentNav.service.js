(function() {
  'use strict';

  angular.module('StudentNavModule', ['StudentFetchService'])

  .service('StudentNavService', function($q, StudentResource, TEMPDATA){
    var self = this;

    //temp data - will come from API call to db
    var data = TEMPDATA;

    self.list = angular.copy(data);
    self.data = angular.copy(data);
    var index = 0;
    self.state = {};
    setSelected();

    // NOTE TO JARED: figure out where this is being used
    self.setSelected = function(selectedStudent){
      index = self.list.indexOf(selectedStudent);
    }

    function setSelected(){
      self.state.selectedStudent = self.list[index];
      formatSelectedStudent(self.state.selectedStudent);
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
        index = self.list.length-1;
      }
      setSelected();
    };

    /* This function builds an array of contacts and collapses
    ** some of the contact fields for easier use within the markup
    ** I.e. creates 'address' field from 'street', 'apt', 'zip', etc.
    **
    ** Also joins ATS contacts with custom contacts
    **/
    function formatSelectedStudent(student){
      var contactList = [];
      var ats = student.atsContacts;
      var custom = student.additionalContacts;
      for (var contact in ats){

        if (ats[contact].street){
          var address = ats[contact].street;
          address = ats[contact].apt ? (address + ' ' + ats[contact].apt) : address;
          address += ', ' + ats[contact].city + ', NY ' + ats[contact].zip;
          ats[contact].address = address;
        }

        if (ats[contact].first){
          ats[contact].name = ats[contact].first;
          ats[contact].name += " " + ats[contact].last;
        }

        ats[contact].contactType = 'ats';
        ats[contact].title = "ATS: " + contact;
        contactList.push(ats[contact]);
      }
      student.contacts = contactList;
      console.log(student);
    }

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
