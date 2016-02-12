angular.module('EmployeePanda.controllers')
.controller('AppMenuController', function($scope, $state, DetailsService, EmployeeService) {  
    this.goToPage = function(state){
        $state.go(state);
    };

    this.loginInfo = DetailsService.loginInfo.userInfo.get();
    //alert(JSON.stringify(this.loginInfo));
    $scope.numberOfOrders = 0;

     $scope.role = (this.loginInfo.role == 'Employee');

    $scope.updateBadge = function(){
        var emailid = DetailsService.loginInfo.userInfo.get().emailid;
        EmployeeService.getMyOrders(emailid).then(function(orders){
                // Order is Delivered
                var incompleteOrders = orders.map(function(order, index, orders){
                    if(order.status !== 'Order is Delivered')
                    {
                        return order;
                    } else
                    {
                        return;
                    }
                });

                incompleteOrders.clean(null);

                $scope.numberOfOrders = incompleteOrders.length;
            });
    };

    EmployeeService.getMyOrders(this.loginInfo.emailid).then(function(orders){
        // Order is Delivered
        var incompleteOrders = orders.map(function(order, index, orders){
            if(order.status !== 'Order is Delivered')
            {
                return order;
            } else 
            {
                return;
            }
        });

        incompleteOrders.clean(null);

        $scope.numberOfOrders = incompleteOrders.length;
    });

    this.goToMyOrders = function(){

        EmployeeService.getMyOrders(this.loginInfo.emailid).then(function(orders){
                // Order is Delivered
                var incompleteOrders = orders.map(function(order, index, orders){
                    if(order.status !== 'Order is Delivered')
                    {
                        return order;
                    } else
                    {
                        return;
                    }
                });

                incompleteOrders.clean(null);

                $scope.numberOfOrders = incompleteOrders.length;

                if($scope.numberOfOrders > 0)
                {
                    $state.go('app.myOrders');
                }
            });
    };
});