var angular = require('angular'),
headerController = require('./headerController');

module.exports = angular.module('headerComponent', [])
.controller('headerController', headerController)
.directive('headerComponentDirective', function() {
  return {
    restrict: 'E',
    templateUrl: '/modules/header/headerView.html'
  };
});