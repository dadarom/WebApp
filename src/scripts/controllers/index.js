/**
 * Created by yaorenjie on 8/5/15.
 */
'use strict';

angular.module('common-app')
.controller('IndexCtrl', ['$rootScope', '$scope', 'Menu',
    function ($rootScope, $scope, Menu) {
      $rootScope.menuElements = {};
      var data =Menu.query(function(){
         $scope.menus = data.menu;
      });
    }
  ]);