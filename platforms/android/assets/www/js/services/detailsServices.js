angular.module('EmployeePanda.services')
.factory('DetailsService', function($window, localStorageService) {
  
  this.vendorInfoStorage = {
    selectedVendor:{
      set: function(obj){
        localStorageService.set('selectedVendorObject', obj);
      },
      get: function(){
        return localStorageService.get('selectedVendorObject');
      },
      remove: function(){
        localStorageService.set('selectedVendorObject');
      }
    }
  };

  this.employeeOrderStorage = {
    employeeOrder:{
      set: function(obj){
        localStorageService.set('employeeOrderObject', obj);
      },
      get: function(){
        return localStorageService.get('employeeOrderObject');
      },
      remove: function(){
        localStorageService.set('employeeOrderObject');
      }
    }
  };
  
  this.orderInfoStorage = {
    selectedOrder:{
      set: function(obj){
        localStorageService.set('selectedOrderObject', obj);
      },
      get: function(){
        return localStorageService.get('selectedOrderObject');
      },
      remove: function(){
        localStorageService.set('selectedOrderObject');
      }
    }
  };  
  
  this.confirmedOrderInfoStorage = {
    orderInfo:{
      set: function(obj){
        localStorageService.set('confirmedOrderInfoObject', obj);
      },
      get: function(){
        return localStorageService.get('confirmedOrderInfoObject');
      },
      remove: function(){
        localStorageService.set('confirmedOrderInfoObject');
      }
    }
  };
  
   this.loginInfoStorage = {
    userInfo:{
      set: function(obj){
        localStorageService.set('userInfoObject', obj);
      },
      get: function(){
        return localStorageService.get('userInfoObject');
      },
      remove: function(){
        localStorageService.set('userInfoObject');
      }
    }
  };

  this.deviceIdInfoStorage = {
      deviceIdInfo:{
        set: function(obj){
          localStorageService.set('deviceIdInfoObject', obj);
        },
        get: function(){
          return localStorageService.get('deviceIdInfoObject');
        },
        remove: function(){
          localStorageService.set('deviceIdInfoObject');
        }
      }
    };
  

  return {
    vendorInfo: this.vendorInfoStorage,
    loginInfo: this.loginInfoStorage,
    orderInfo: this.orderInfoStorage,
    employeeOrder: this.employeeOrderStorage,
    confirmedOrderInfo: this.confirmedOrderInfoStorage,
    deviceIdInfo: this.deviceIdInfoStorage
  };
});