angular.module('EmployeePanda.controllers')
.controller('MyOrdersController', function($scope, $stateParams, EmployeeService, DetailsService, $state, $ionicHistory) {
    this.employeeInfo = {
    	"emailid": DetailsService.loginInfo.userInfo.get().emailid
    };
    
    $scope.myOrdersList = [];
    this.myOrdersList = [];
    EmployeeService.getMyOrders(this.employeeInfo.emailid).then(function(data){
         // Order is Delivered
        var incompleteOrders = data.map(function(order, index, data){
            console.log("MY DATA LIST ----> " + JSON.stringify(data));

            if(order.status !== 'Order is Delivered')
            {
                return order;
            } else 
            {
                return;
            }
        });

        incompleteOrders.clean(null);

    	$scope.myOrdersList = incompleteOrders;

    	console.log("MY ORDER LIST ----> " + JSON.stringify($scope.myOrdersList));

        this.myOrdersList = incompleteOrders;

        angular.element('#orderInfo').empty();
        angular.element('#orderInfo').qrcode({
            text: JSON.stringify($scope.myOrdersList[0].ordernumber)
        });

    });
    
    this.currentIndex = 0;

    this.calculateOrderAmount = function(orderedItems)
    {
        if(orderedItems !== undefined || orderedItems !== [] || orderedItems !== null)
        {
            var itemsCostForOrder = orderedItems.map(function(item, index, array){
            return parseInt(item.rate)*parseInt(item.quantity);
            });

            var totalCost = itemsCostForOrder.reduce(function(a, b) { return a + b; }, 0);

            return parseInt(totalCost) || 0;
        }
    };

    this.convertTimeFormat = function(time){
        var formattedDateTime, orderDate;
        if(time === undefined)
        {
            orderDate = new Date();
        } else
        {
            orderDate = new Date(time);
        }
        

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

    this.backToHome = function(){
        $state.go('app.vendorList');
    };

    this.swipeRight = function(){
        console.log("Right");
        if(this.currentIndex > 0)
        {
            this.currentIndex = this.currentIndex - 1;
            
            angular.element('#orderInfo').empty();
            angular.element('#orderInfo').qrcode({
                text: JSON.stringify($scope.myOrdersList[this.currentIndex].ordernumber)
            });
        }
    };

    this.swipeLeft = function(){
        console.log("Left");
        if(this.currentIndex < $scope.myOrdersList.length - 1)
        {
            this.currentIndex = this.currentIndex + 1;
            
            angular.element('#orderInfo').empty();
            angular.element('#orderInfo').qrcode({
                text: JSON.stringify($scope.myOrdersList[this.currentIndex].ordernumber)
            });
        }
    };

    this.goToHome = function() {
    $ionicHistory.nextViewOptions({
                            disableBack: true
                          });
            			$ionicHistory.clearHistory();
         $state.go('app.vendorList');
    }

});