angular.module('EmployeePanda.controllers')
.controller('VendorOrderController', function($scope, $stateParams, $state, VendorService, DetailsService) {  
     this.orderId = $stateParams.orderId;
     
     // Fetch Vendor Information
     this.orderInfo = DetailsService.orderInfo.selectedOrder.get('selectedOrderObject');
     $scope.orderInfo = DetailsService.orderInfo.selectedOrder.get('selectedOrderObject').status;
      $scope.userInfo = DetailsService.loginInfo.userInfo.get();
	 
	 // Explicit Menu List
	 this.orderMenu = this.orderInfo.ordereditems;	 
     
      this.changeOrderStatus = function(ordernumber,status) {
          
          var orderChangeObject  = {
                id: ordernumber              
          }
          
          if(status === 'Order in Queue'){
              orderChangeObject.status = "Order in Process";
          }
          else if (status === 'Order in Process'){
              orderChangeObject.status = "Order is Ready";
          } else if(status === 'Order is Ready')       
          {
            orderChangeObject.status = "Order is Delivered";
          }
          
          VendorService.changeOrderStatus(orderChangeObject).then(function(data) {
            //$scope.orderInfo = 
            $scope.vendors = data;
             if(status === 'Order in Queue'){
              $scope.orderInfo = "Order in Process";
              }
              else if (status === 'Order in Process'){
                  $scope.orderInfo = "Order is Ready";
              } else if(status === 'Order is Ready')       
              {
                $scope.orderInfo = "Order is Delivered";
                $state.go('app.vendorOrderList');
              }         
          }).catch(function(response) {
            // TODO: Is this really required?
            // angular.element('#roomTable').css('display', 'none'); 
            console.log(JSON.stringify(response));
          }); 
	 	
	  };

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

});