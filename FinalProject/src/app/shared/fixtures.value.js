(function() {
  'use strict';

  angular.module('template')

  .value('Fixtures', {
    studentList: [
      {
        "_id": "90998754796B049",
        "studentId": 909987547,
        "schoolId": "96B049",
        "studentDetails": {
            "first": "Danielle",
            "last": "Scaramellino",
            "lastFirst": "Scaramellino, Danielle",
            "email": "email"
        },
        "additionalContactDetails": {
          "altContacts": [{
            "first": "Joj",
            "last": "Contreras",
            "phone": "555 444 3225"
          }],
          "atsMetaData": {
            "adult1": {
              "email": "testEmail@email.com",
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
        },
        "outreachLogs": [
          {"outreachType": "attendance", "outreachMethod": "Phone call home", "dateOfAbsence": "2015-09-11T04:00:00.000Z", "durationOfAbsence": 1, "outreachNotes": "Jared was absent again on Friday. Called his mother. She was very upset.", "timestamp": "9/13/2015, 2:00:19 PM" },
          {"outreachType":"discipline","outreachMethod":"Phone call home","numberDialed":"(222) 494-0002","outreachNotes":"Jared was using really inappropriate language. Told his mother.","timestamp":"9/13/2015, 5:43:22 PM"},
          {"outreachType":"regents","outreachMethod":"Email sent home","recipientEmail":"paul@email.com","outreachNotes":"Emailed Jared's father to remind him how important the upcoming exam is.","timestamp":"9/13/2015, 5:45:53 PM"}
        ]
      },
      {
        "_id": "90998754896B049",
        "studentId": 909987548,
        "schoolId": "96B049",
        "studentDetails": {
            "first": "Jared",
            "last": "Carrano",
            "lastFirst": "Carrano, Jared",
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
    ]
      ,
          studentData: [
      {
        "_id": "90998754796B049",
        "studentId": 909987547,
        "schoolId": "96B049",
        "studentDetails": {
            "first": "Danielle",
            "last": "Scaramellino",
            "lastFirst": "Scaramellino, Danielle",
            "email": "email"
        },
        "additionalContactDetails": {
          "altContacts": [{
            "first": "Joj",
            "last": "Contreras",
            "phone": "555 444 3225"
          }],
          "atsMetaData": {
            "adult1": {
              "email": "testEmail@email.com",
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
        },
        "outreachLogs": [
          {"outreachType": "attendance", "outreachMethod": "Phone call home", "dateOfAbsence": "2015-09-11T04:00:00.000Z", "durationOfAbsence": 1, "outreachNotes": "Jared was absent again on Friday. Called his mother. She was very upset.", "timestamp": "9/13/2015, 2:00:19 PM" },
          {"outreachType":"discipline","outreachMethod":"Phone call home","numberDialed":"(222) 494-0002","outreachNotes":"Jared was using really inappropriate language. Told his mother.","timestamp":"9/13/2015, 5:43:22 PM"},
          {"outreachType":"regents","outreachMethod":"Email sent home","recipientEmail":"paul@email.com","outreachNotes":"Emailed Jared's father to remind him how important the upcoming exam is.","timestamp":"9/13/2015, 5:45:53 PM"}
        ]
      },
      {
        "_id": "90998754896B049",
        "studentId": 909987548,
        "schoolId": "96B049",
        "studentDetails": {
            "first": "Jared",
            "last": "Carrano",
            "lastFirst": "Carrano, Jared",
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
    ]
  });

})();
