// MODULE //takes an array of dependencies this is the only item in global namespace
var angularApp = angular.module('angularApp', []); // one object in gnamespace

// first item after you define the main angualr module is to define a controller


// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {

	$scope.name ="adam";
	console.log($scope);

}]);

/* above controller is the model and its responsible for controlling the view you
you associate in the dom as a custom attribue with
ng-controller="mainController" angular keeps them all bound together

bare bones angular application a module 1x sitting in global name space and a controller
and view bound together.

*/


/* THE SCOPE SERVICE - BIG part of the binding process between module and view
its an object from the scope service that relies on dependency injection

$scope passing the controller an object scope is an object its term is called a service
they all start with a $ it injects the scope into the function controller.

add variables and function the scope becomes the middle piece that area between the view and controller

the scope defines the data that goes between the model and the view
*/