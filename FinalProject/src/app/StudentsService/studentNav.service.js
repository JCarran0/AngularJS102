(function() {
  'use strict';

  angular.module('StudentNavModule', ['StudentFetchService'])

  .service('StudentNavService', function($q, $log, StudentResource, TEMPDATA, NewContact){
    var self = this;

    //temp data - will come from API call to db
    var data = TEMPDATA;

    var cachedCopyOfSelectedStudent; // a restore point to use with resetStudent();
    var index = 0;
    self.state = {};
    self.state.list = angular.copy(data);
    self.state.data = angular.copy(data);
    setSelected();
    // self.state.list = [];
    // self.state.data = [];

    self.setIndex = function(selectedStudent){
      index = self.state.list.indexOf(selectedStudent);
      formatSelectedStudent(selectedStudent);  // this should be moved out of this service - add to contact service?
      cacheSelectedStudent();
    };

    function cacheSelectedStudent(){
      cachedCopyOfSelectedStudent = angular.copy(self.state.selectedStudent);
    }

    function setSelected(){
      self.state.selectedStudent = self.state.list[index];
      formatSelectedStudent(self.state.selectedStudent);
      cacheSelectedStudent();
    }

    // self.restoreSelectedStudent = function(){
    //   var newCacheCopy = angular.copy(cachedCopyOfSelectedStudent);
    //   self.state.list.splice(index, 1, newCacheCopy); // remove
    //   // self.state.selectedStudent = newCacheCopy;
    //   // formatSelectedStudent(self.state.selectedStudent);
    //   // cacheSelectedStudent();
    // };

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




    // All this contact business should be moved to another service
    // Possibly the contact.controller.js file???
    // Or else a new service.
    self.addNewContact = function(newContact){
      delete newContact.isNew;
      self.state.selectedStudent.additionalContactDetails.altContacts.push(newContact);
      formatSelectedStudent(self.state.selectedStudent);
      cacheSelectedStudent();
    };

    self.createNewContact = function(){
      return new NewContact();
    };

    self.deleteContact = function(contact){
      var alts = self.state.selectedStudent.additionalContactDetails.altContacts;
      var indx = alts.indexOf(contact);
      alts.splice(indx, 1);
      formatSelectedStudent(self.state.selectedStudent);
      cacheSelectedStudent();
    };

    self.saveAtsMetaData = function(metaData, contactType){
      var atsMetaData = self.state.selectedStudent.additionalContactDetails.atsMetaData;
      if (!atsMetaData[contactType].notes){
        atsMetaData[contactType].notes = [];
      }
      atsMetaData[contactType].notes.push(metaData.newNote);
      $log.debug('Write atsMeta to database here', atsMetaData);
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
      var addlDetails = student.additionalContactDetails;
      var alts = addlDetails.altContacts;
      for (var atsContact in ats){
        // concatentate ATS data with ATS meta data
        var metaData = addlDetails.atsMetaData[atsContact];
        ats[atsContact].atsMetaData = metaData;
        ats[atsContact].email = metaData.email || ats[atsContact].email || '';
        ats[atsContact].notes = metaData.notes ? metaData.notes.join('<br>') : '';
        // make address a single entity for readability
        if (ats[atsContact].street){
          var address = ats[atsContact].street;
          address = ats[atsContact].apt ? (address + ' ' + ats[atsContact].apt) : address;
          address += ', ' + ats[atsContact].city + ', NY ' + ats[atsContact].zip;
          ats[atsContact].address = address;
        }
        // concat first + last name
        if (ats[atsContact].first){
          ats[atsContact].name = ats[atsContact].first;
          ats[atsContact].name += " " + ats[atsContact].last;
        }
        ats[atsContact].isAts = true;
        ats[atsContact].contactField = atsContact;
        ats[atsContact].title = "ATS: " + (ats[atsContact].name || "");
        contactList.push(ats[atsContact]);
      }

      // add alternative contacts to contacts array
      for (var altContact in alts){
        if (alts[altContact].first){
          alts[altContact].name = alts[altContact].first;
          alts[altContact].name += " " + alts[altContact].last;
        }
        alts[altContact].contactField = altContact;
        alts[altContact].title = "Custom Contact: " + (alts[altContact].name || "");
        contactList.push(alts[altContact]);
      }
      student.contacts = contactList;
    }



    // self.load = function(){

    // var apiCall1 = StudentResource.getStudents().$promise;
    // var apiCall2 = StudentResource.getStudents().$promise;

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

.factory('NewContact', function(){
  return function(){
    this.isNew = true;
    this.title = "Cutsom Contact";
    this.first = "";
    this.last = "";
    this.email = "";
    this.phone = "";
    this.phoneType = "";
  };
});

})();
