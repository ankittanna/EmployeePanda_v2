function vendorServices($http,DetailsService) {
    'use strict';
    
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function getOrders() {
        var userInfo = DetailsService.loginInfo.userInfo.get();
        var url = baseUrl + '/vendors/getorders?orderto=' + userInfo.emailid;
        return $http.get(url).then(function(response) {
            return response.data;
        });
        
    }
    
    function getVendorInformation()
    {
        
    }
    
    function changeOrderStatus(orderChangeObject){
        return $http({
            method: 'PUT',
            url: baseUrl + '/order',
            headers: {
                'Content-Type': 'application/json'
            },
            data: orderChangeObject
        }).then(function(response) {
            console.log(response.data) ;                       
            return response.data;
        }); 
    }

    // Object Map of functions
    return {
        getOrders: getOrders,
        getVendorInformation: getVendorInformation,
        changeOrderStatus: changeOrderStatus
    };
}

angular.module('EmployeePanda.services')
.factory('VendorService', vendorServices);

vendorServices.$inject = ['$http', 'DetailsService'];
