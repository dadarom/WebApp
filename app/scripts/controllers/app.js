/**
 * Created by yaorenjie on 8/5/15.
 */
'use strict';

angular
.module('common-app', [
    'ngResource',
    'ngRoute',
    'dataService'
  ])
.config(function ($routeProvider) {
    $routeProvider
      .when('/web1', {
        templateUrl: 'views/web1.html',
        controller: 'Web1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });