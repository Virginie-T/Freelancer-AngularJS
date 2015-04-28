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
      var image = attr.car;
      var clrz = attr.clr;
      console.log(attr.class);
      scope[clrz] = "color2";
      scope[image] = scope.imageLinks.dark;
      scope.$apply();
    });
    element.bind('mouseleave', function() {
      var image = attr.car;
      var clr = attr.clr;
      scope[clr] = "color";
      scope[image]= scope.imageLinks[image];
      scope.$apply();
    });
  };
});

// app.directive('enter', function() {
//   return function (scope, element, attr) {
//     element.bind('mouseenter', function() {
//       element.parent().addClass('color');
//     });
//     element.bind('mouseleave', function() {
//       var image = attr.car;
//       scope[image]= scope.imageLinks[image];
//       scope.$apply();
//     });
//   };
// });
