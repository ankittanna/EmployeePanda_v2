angular.module('EmployeePanda.controllers')
.controller('VendorListController', function($scope, EmployeeService, DetailsService) {  
        this.searchVendorStr = '';
        $scope.vendors = [];
 	
        this.selectVendor = function(vendorObject){
        	DetailsService.vendorInfo.selectedVendor.set(vendorObject);
        };

        EmployeeService.getVendorList().then(function(data) {
            $scope.vendors = data;          
        }).catch(function(response) {
            // TODO: Is this really required?
            // angular.element('#roomTable').css('display', 'none'); 
            console.log(JSON.stringify(response));
        }); 
});