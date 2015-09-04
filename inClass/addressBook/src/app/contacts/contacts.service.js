(function() {
  'use strict';

  angular.module('ContactsModule', [])

  .factory('Contact', function() {
     function Contact(submission) {
      this.first = submission.first;
      this.last = submission.last;
      this.email = submission.email;
      this.phone = submission.phone;
     }
     return Contact;
  })

  .service('ContactList', function(){
    var list = [{
      first: 'jared',
      last: 'carrano',
      phone: '(203) 494-0232',
      email: 'jcarrano@newvisions.org'
    },{
      first: 'danielle',
      last: 'scaramellino',
      phone: '(202) 444-5555',
      email: 'dscarm@newvisions.org'
    }];
    return {
      list: list,
      add: function(newContact){
        console.log('adding contact')
        list.push(newContact);
      },
      deleteUser: function(contact){
        console.log(contact)
        var index = list.indexOf(contact);
        console.log(index);
        list.splice(index, 1);
      }
    };
  })

})();
