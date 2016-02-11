angular.module('EmployeePanda.controllers')
.controller('SignupCtrl', function($scope, EPS, $state, $ionicPopup) {
    $scope.submitted = false;
    $scope.data = {};
    this.userData = {};
    
    this.submitSignupForm = function(isFormValid){
        $scope.submitted = true;
        
        if(isFormValid)
        {
            //alert('Our Form is Valid');
            this.userData = $scope.data;
            this.userData.role = 'Employee';
            
            EPS.signupUser(this.userData).then(function(data) {
            $state.go('login');
            }).catch(function(response) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login Error!',
                    template: 'Please check your credentials!'
                });
            });
        }
        
        
    };
});