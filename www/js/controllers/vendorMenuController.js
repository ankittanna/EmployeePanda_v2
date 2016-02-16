angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService, DetailsService, $state, $ionicPopup) {  
     // Clearing the existing order
     DetailsService.employeeOrder.employeeOrder.remove();

     this.vendorId = $stateParams.vendorId;
     
     // Fetch Vendor Information
     this.vendorInfo = {};
     
     angular.copy(DetailsService.vendorInfo.selectedVendor.get(), this.vendorInfo);
	 
	 // Fetch Employee Information
	 this.employeeInfo = DetailsService.loginInfo.userInfo.get();

	 // Explicit Menu List
	 this.vendorMenu = this.vendorInfo.menu;

	 // Order Details Object
	 this.orderDetails = {
	 	orderto: this.vendorInfo.emailid,
		orderby: this.employeeInfo.emailid,
        ordertoname: this.vendorInfo.name,
        orderbyname: this.employeeInfo.name,
        ordertophoneno:this.vendorInfo.phonenumber,
        orderbyphoneno:this.employeeInfo.phonenumber,
		ordereditems:[]
	};

	 // Adding Category of Food Based on Number
	 this.vendorMenu = this.vendorMenu.map(function(item, index, menu){
         item[item._id] = 0;
	 	if(item.category === 'Veg')
	 	{
	 		item.categoryId = '1-V';
	 		return item;
	 	} else 
	 	{
	 		item.categoryId = '2-NV';
	 		return item;
	 	}
	 });

	 this.selectedCategory = '1-V';
    
	 this.switchMenuCategory = function(category)
	 {
	 	if(category === 'veg')
	 	{
	 		this.selectedCategory = '1-V';
	 	} else if(category === 'nonveg')
	 	{
	 		this.selectedCategory = '2-NV';
	 	}
	 };
    
	 this.orderCost = 0;
	 this.itemsOrdered = [];

	 this.updateOrderQuantity = function()
	 {
	 	this.orderCost = this.calculateOrderCost();
	 };

	 this.decreaseCounter = function(menuItem){
	 	
       if(menuItem.quantity>0){	 		
             menuItem.quantity = menuItem.quantity - 1;
	 	}
	 	this.orderCost = this.calculateOrderCost();
	 };

	 this.increaseCounter = function(menuItem){
	 	if(menuItem.quantity<50){	 		
             menuItem.quantity = menuItem.quantity + 1;	 		
	 	}
	 	this.orderCost = this.calculateOrderCost();
	 };

	 this.calculateOrderCost = function(){
	 	var itemsCostForOrder = this.vendorInfo.menu.map(function(item, index, array){
	 		return parseInt(item.rate)*parseInt(item.quantity);
	 	});

	 	var totalCost = itemsCostForOrder.reduce(function(a, b) { return a + b; }, 0);

	 	return parseInt(totalCost) || 0;
	 };

	 this.proceedToCheckout = function(){
	 	DetailsService.employeeOrder.employeeOrder.remove();

	 	this.itemsOrdered = this.vendorInfo.menu.map(function(item, index, array){
	 		if(item.quantity !== 0 && item.quantity > 0){
	 			return item;
	 		} else {
	 			return;
	 		}
	 	});

	 	this.itemsOrdered.clean(null);
         
         if (this.itemsOrdered.length === 0 ){
             var alertPopup = $ionicPopup.alert({
                title: 'Order Error',
                template: 'Please select at least one item to proceed'
            });
            return;
         }

	 	this.orderDetails.vendorName = this.vendorInfo.name;
	 	this.orderDetails.ordereditems = this.itemsOrdered;
	 	this.orderDetails.totalCost = this.orderCost;

	 	console.log('------> ' + JSON.stringify(this.orderDetails));
	 	DetailsService.employeeOrder.employeeOrder.set(this.orderDetails);

	 	$state.go('app.confirmOrder');
         
	 };
     
     this.goToHome = function() {
         $state.go('app.vendorList');
     };
     
     this.clearList = function(){
          angular.copy(DetailsService.vendorInfo.selectedVendor.get(), this.vendorInfo);
          this.vendorMenu = this.vendorInfo.menu;
     };

});