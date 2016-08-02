// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('myController', ['$scope', function($scope){
  $scope.popup = function(str){

    alert(str);
  };
}])

.controller('TabController',['$scope', '$http', function($scope, $http){
   var text = '{ "Names" : [' +
  '{ "NickName":"John" , "sex" : "M" },' +
  '{ "NickName":"Beck" , "sex" : "M" },' +
  '{ "NickName":"Alfie" , "sex" : "M" },' +
  '{ "NickName":"Archie" , "sex" : "M" },' +
  '{ "NickName":"Art" , "sex" : "M" },' +
  '{ "NickName":"Ash" , "sex" : "M" },' +
  '{ "NickName":"Lex" , "sex" : "M" },' +
  '{ "NickName":"Mick" , "sex" : "M" },' +
  '{ "NickName":"Olivia" , "sex" : "F" },' +
  '{ "NickName":"Amelia" , "sex" : "F" },' +
  '{ "NickName":"Charlotte" , "sex" : "F" },' +
  '{ "NickName":"Ava" , "sex" : "F" },' +
  '{ "NickName":"Isla" , "sex" : "F" },' +
  '{ "NickName":"Peter" , "sex" : "M"} ]}';
  $scope.tab = 1;
  $scope.Name = JSON.parse(text);
  $scope.profiles = [
      {name:'John', role: 'Geek', photoSrc:'img/1.jpg', phone: '0901960568'},
      {name:'Greg', role: 'Normal Human', photoSrc:'img/2.jpg', phone: '0901960568'},
      {name:'Max', role: "Greg's friend", photoSrc:'img/3.jpg', phone: '0901960568'},
      {name:'Pete', role: 'Saleman', photoSrc:'img/4.jpg', phone: '0901960568'},
    ];
  console.log($scope.Name)
 
  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum){
    return $scope.tab === tabNum;

  };

  $scope.popup2 = function(str){
      alert(str);
  }
/*$http.get("http://api.randomuser.me/?results=20")
.success(function(res){
  $scope.profiles = res.results;
console.dir(res)
})
.error(function(error){


})*/
}])