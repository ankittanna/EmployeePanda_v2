function employeePandaServices($http,DetailsService) {
    'use strict';
     var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function loginUser(userData) {     
        return $http({
            method: 'POST',
            url: baseUrl + '/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: userData
        }).then(function(response) {
            console.log(response.data) ;  
            DetailsService.loginInfo.userInfo.set(response.data[0]);             
            return response.data;
        });     
        
    }
    
    function signupUser(userData) {      
        return $http({
            method: 'POST',
            url: baseUrl + '/employee',
            headers:{
                'Content-Type': 'application/json'
            },
            data: userData
        }).then(function(response) {
            console.log(response.data);          
            return response.data;
        });
    }
        
    // Object Map of functions
    return {
        loginUser: loginUser,        
        signupUser: signupUser

    };
}

angular.module('EmployeePanda.services',[])
    .factory('EPS', employeePandaServices);

employeePandaServices.$inject = ['$http','DetailsService'];
