var myApp = angular.module('eplApp',['ngRoute']);

myApp.controller('mainController',['$scope','$http','$q','$filter',function($scope,$http,$q,$filter){
	$scope.pageHeading = 'English Premier League';
}])