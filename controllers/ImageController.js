app.controller('ImageCtrl', function ImageCtrl($scope, $state) {
  $scope.imageLinks = { car1: "img/car1.jpeg",
                        car2: "img/car2.jpeg",
                        dark: "img/cardark.jpeg"};
  $scope.carImage = $scope.imageLinks.car1;
  $scope.carImage2 = $scope.imageLinks.car2;
});
