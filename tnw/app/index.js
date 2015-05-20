'use strict'

window.PouchDB = require('pouchdb')
window.PouchDB.plugin(require('pouchdb-authentication'))

require('angular').module('app', [
  require('angular-animate'),
  require('angular-aria'),
  require('angular-material'),
  require('./ng-icons'),
  require('angular-ui-router'),
  require('./classrooms'),
  require('./articles'),
  require('./users')
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', require('./components/home'))
    .state('about', require('./components/about'))
    .state('contact', require('./components/contact'))
}])
.directive('appNav', ['users', require('./components/app-nav')])
.controller('AppController', ['$scope', 'users', AppController])
.constant('dbName', 'https://bivit-dev.iriscouch.com/bivit')
.constant('remoteUserDbName', 'https://bivit-dev.iriscouch.com/_users')
//.factory('classrooms', ['pouchDb', require('./services/classrooms')])

function AppController ($scope, users) {
  $scope.showMenu = true
  $scope.toggle = function () {
    $scope.showMenu = !$scope.showMenu
  }
}