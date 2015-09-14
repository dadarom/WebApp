'use strict';

angular.module('dataService', ['ngResource'])
  .factory('Menu', ['$resource',
    function ($resource) {
      return $resource('http://localhost:9000/views/data/menu.json', {}, {
        query: {method: 'GET'}
      });
    }])
;
