var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});

app.directive('enter', function() {
  return function (scope, element, attr) {
    element.bind('mouseenter', function() {
      var image = attr.ngModel;
      scope[image] = scope.imageLinks.dark;
      scope.$apply();
    });
    element.bind('mouseleave', function() {
      var image = attr.ngModel;
      scope[image]= scope.imageLinks.car1;
      scope.$apply();
    });
  };
});
