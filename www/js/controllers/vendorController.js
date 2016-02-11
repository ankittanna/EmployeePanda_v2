angular.module('EmployeePanda.controllers').controller('VendorCtrl', function($scope,  $state, VendorService, DetailsService) {

        $scope.orders = [];  
        
        $scope.userInfo = DetailsService.loginInfo.userInfo.get();
        
        this.getOrders = function(){
            
            VendorService.getOrders().then(function(data) {            
            $scope.orders = data; 
                 
            for (var i=0; i<$scope.orders.length; i++) {
                var total = 0;
                for (var j=0; j<$scope.orders[i].ordereditems.length; j++) {
                    total = total + $scope.orders[i].ordereditems[j].rate * $scope.orders[i].ordereditems[j].quantity;
                }
                $scope.orders[i].total = total;
            }

            $scope.orders = $scope.orders.map(function(order, index, orders){
                    if(order.status !== 'Order is Delivered')
                    {
                        return order;
                    } else
                    {
                        return;
                    }
                });
            $scope.orders.clean(null);

            }).catch(function(response) {
                console.log(JSON.stringify(response));
            });
            
        }
        
        this.getOrders();
        
        
        this.selectOrder = function(orderObject){
        	DetailsService.orderInfo.selectedOrder.set(orderObject);
            $state.go('app.orderedMenu');
        };
        
        this.goToOrderList = function()
        {
            $state.go('app.vendorOrderList');
        };
    
});
    
