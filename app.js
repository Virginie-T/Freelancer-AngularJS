var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});

app.directive('enter', function() {
  return function (scope, element) {
    element.bind('mouseenter', function() {
      console.log(scope.imageLink);
      scope.imageLink = "img/freelancer-logo.png";
      scope.$apply();
      console.log(scope.imageLink);
    });
  };
});
