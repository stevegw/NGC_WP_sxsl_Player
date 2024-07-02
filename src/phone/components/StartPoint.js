// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


let pre = [{stepId:"e6aaf568-0fbf-4efe-84f2-82b43fa3a233",status:"Passed"} ,  {stepId:"77ec44cf-fd54-482f-874a-a6c3c556c2e1", status:"Passed" }                               ];


$scope.setPrereq = function () {
  
  
  $scope.app.params.prereq =  pre ;
  
}
