angular.module("Appshare")
.controller('mainCtrl',function($scope,Delen){
  $scope.shareFacebook = function()
  {
    Delen.deelFacebook();
  }
  $scope.shareTwitter= function()
  {
    Delen.deelTwitter();
  }


});
