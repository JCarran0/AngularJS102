

(function() {
  'use strict';

  angular.module('template')

  .controller('MainController', function ($resource) {
    var self = this;

    self.name = "Google Maps API"

    var url = "http://maps.googleapis.com/maps/api/geocode/json"
    var Search = $resource(url);


    self.search = function(value){
      console.log(value);
      Search.get({address: value}).$promise.then(function(result){
        console.log(result);
        self.results = JSON.stringify(result.results);
        self.map = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfWHoyfprsH-88R9KEls4rgQteZnECb_I&q=" + value;
      },function(err){
        console.log(err);
      });

    }

//AIzaSyCfWHoyfprsH-88R9KEls4rgQteZnECb_I
  });

})();
