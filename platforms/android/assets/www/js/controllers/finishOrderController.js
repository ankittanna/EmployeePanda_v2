angular.module('EmployeePanda.controllers')
.controller('FinishOrderController', function($scope, $stateParams, EmployeeService, DetailsService, $state, $ionicHistory) {
    this.orderDetails = DetailsService.confirmedOrderInfo.orderInfo.get();
    this.vendorDetails = DetailsService.employeeOrder.employeeOrder.get();

    // Fetch Vendor Information
    this.vendorInfo = DetailsService.vendorInfo.selectedVendor.get();
    
    angular.element('#orderInfo').qrcode({
        text    : this.orderDetails.ordernumber
    });

    this.convertTimeFormat = function(time){
        var formattedDateTime;
        var orderDate = new Date(time);
        
        var hours = orderDate.getHours();
        var minutes = orderDate.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
        formattedDateTime = orderDate.getDate() + '/' + (orderDate.getMonth() + 1) + '/' +  orderDate.getFullYear() + ' ' + strTime;
        return formattedDateTime;
    };

    this.goToHome = function() {
    $ionicHistory.nextViewOptions({
                            disableBack: true
                          });
            			$ionicHistory.clearHistory();
         $state.go('app.vendorList');
     };
});