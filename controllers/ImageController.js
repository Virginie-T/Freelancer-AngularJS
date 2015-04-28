app.controller('ImageCtrl', function ImageCtrl($scope, $state) {
  $scope.imageLinks = { carImage1: "img/car1.jpeg",
                        carImage2: "img/car2.jpeg",
                        carImage3: "img/car3.jpeg",
                        carImage4: "img/car4.jpeg",
                        carImage5: "img/car5.jpeg",
                        carImage6: "img/car6.jpeg",
                        dark: "img/cardark.jpeg"};
  $scope.carImage1 = $scope.imageLinks.carImage1;
  $scope.carImage2 = $scope.imageLinks.carImage2;
  $scope.carImage3 = $scope.imageLinks.carImage3;
  $scope.carImage4 = $scope.imageLinks.carImage4;
  $scope.carImage5 = $scope.imageLinks.carImage5;
  $scope.carImage6 = $scope.imageLinks.carImage6;
});
