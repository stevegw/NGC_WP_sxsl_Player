// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

console.log($scope.app);

$scope.$on('procEnd', function(evt, procedure) {
    console.log ("HELLO")
    //debugger;

});

$scope.$on('stepStart', function(evt, step) {
    console.log(JSON.stringify(step));
    //debugger;
});

$scope.$on('actionInputDelivered', function(evt, input) {
    console.log ("Action Input Delievered")
    console.log("\t" + JSON.stringify(input.action.details.response));
    //debugger;
});



let pre = [{stepId:"e6aaf568-0fbf-4efe-84f2-82b43fa3a233",status:"Passed"}];


$scope.setPrereq = function () {
  
  
  $scope.app.params.prereq =  pre ;
  
}
