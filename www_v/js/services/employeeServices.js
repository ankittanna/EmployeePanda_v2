function employeeService($http) {
    'use strict';
    
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function getVendorList() {
        var url = baseUrl + '/vendors';
        return $http.get(url).then(function(response) {
            return response.data;
        });
        
    }
     
    function confirmEmployeeOrder(orderData){
        return $http({
            method: 'POST',
            url: baseUrl + '/order',
            headers: {
                'Content-Type': 'application/json'
            },
            data: orderData
        }).then(function(response) {
            console.log(response.data);
            return response.data;
        });
    }

    function getMyOrders(userId)
    {
        var url = baseUrl + '/vendors/getorders?orderby='+userId;
        return $http.get(url).then(function(response) {
            return response.data;
        });
    }
    // Object Map of functions
    return {
        getVendorList: getVendorList,
        confirmEmployeeOrder: confirmEmployeeOrder,
        getMyOrders: getMyOrders

    };
}

angular.module('EmployeePanda.services')
.factory('EmployeeService', employeeService);

employeeService.$inject = ['$http'];
