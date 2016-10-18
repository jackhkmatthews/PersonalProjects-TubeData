angular.module('tubeDataVisualiserApp')
.controller('mainCtrl', function ($scope) {
  // $scope.appContainerObject = {
  //   "width" : "400px"
  // };
  $scope.appContainerNgStyleSyntax = {
    width: "200px",
  };
  // $scope.dataCanvasObject = {
  //   "height" : "500px",
  //   "width" : "100%",
  //   "backgroundColor" : "red",
  // };
  $scope.dataCanvasNgStyleSyntax = {
    height: "200px",
    width: "100%",
    backgroundColor: "white"
  };
  $scope.test = $scope.appContainerNgStyleSyntax;
});
