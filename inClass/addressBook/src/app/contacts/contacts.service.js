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
    var list = [];
    return {
      list: list,
      add: function(newContact){
        console.log('adding contact')
        list.push(newContact);
      }
    };
  })

})();
