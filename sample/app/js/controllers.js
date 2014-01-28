'use strict';

var appCtrls = angular.module('OnlyMobile.controllers', []);

appCtrls.controller('MainCtrl', function($scope) {
    $scope.isMobile = "Yes";
});