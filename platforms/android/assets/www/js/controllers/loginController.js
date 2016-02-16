angular.module('EmployeePanda.controllers', [])
.controller('LoginCtrl', function($scope, EPS, $state, $ionicPopup, DetailsService) {
    $scope.data = {};
     $scope.data.emailid = "vinod.khandelwal@accenture.com";
     $scope.data.password = "password";

    this.login = function() {
    $scope.data.deviceid = DetailsService.deviceIdInfo.deviceIdInfo.get();

         EPS.loginUser($scope.data).then(function(data) {
            if(data[0].role === 'Employee') {
                $state.go('app.vendorList');
            }
            else{
                $state.go('app.vendorhome');
            }

        }).catch(function(response) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Error!',
                template: 'Please check your credentials!'
            });
        });
    };

    this.signup = function(){
        console.log("Does this come here!!");
        $state.go('signup');
    };

});
