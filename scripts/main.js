angular.module("Appshare")
.controller('mainCtrl',function($scope,Share){
  $scope.shareFacebook = function()
  {
    Share.deelFacebook($scope.description,$scope.image);
  }
  shareTwitter= function()
  {
    Share.deelTwitter($scope.text);
  }
  tweeted= function()
  {
    Share.checkTweeted();
  }

  $scope.text= "CONFIRMED BY IGN";
  $scope.description = "Hallo";
  $scope.image="http://www.w3schools.com/images/w3schools_green.jpg";
});
