/**
 * Created by yaorenjie on 8/8/15.
 */
'use strict';

angular.module('dataService', ['ngResource'])
  .factory('Menu', ['$resource',
    function ($resource) {
      return $resource('http://localhost:8000/src/common/data/menu.json', {}, {
        query: {method: 'GET'}
      });
    }])
;
