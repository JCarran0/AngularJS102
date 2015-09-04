(function(){
  "use strict";

  angular.module('API_CONFIG', [])

  .constant('USERS_API', {
    devApiEndpoint:'https://nv-student-api.herokuapp.com/v1/users',
    devAuthToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6eyJfaWQiOiJBVVRIMCJ9LCJpYXQiOjE0MjU0NzM1MzV9.VhiWRrfBM1iltWxl-zf-z4trte2k9ISemZJTamhPDlE'
  })

  .constant('STUDENTS_API', {
    devApiEndpoint:'https://nv-student-api.herokuapp.com/v1/students',
    devAuthToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6eyJfaWQiOiJET0UtMTExIn0sIm5hbWUiOiJBbnRob255IFZhbGlkIFVzZXIiLCJpYXQiOjE0MjU0NzM1MzV9.043_mvcfEJf1f4LCXwwRQq5v-Q9qoQSt_fwHW_vKZjc'
  });

})();
