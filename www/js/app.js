// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('EmployeePanda', ['ionic', 'EmployeePanda.controllers', 'EmployeePanda.services', 'LocalStorageModule', 'EmployeePanda.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    BMSClient.initialize("http://EmpPanda.mybluemix.net","43694daf-8689-477f-b21d-9e068e18301c");
            var success = function(message) {
    			var deviceId = JSON.parse(message).deviceId;
    			window.localStorage['empLocStorage'] = deviceId;
    			// alert("DeiviceLocal"+window.localStorage['empLocStorage']);
    		};
            var failure = function(message) { alert("Error: " + message); };
            var settings = {
                ios: {
                    alert: true,
                    badge: true,
                    sound: true
                }
            };
            MFPPush.registerDevice(settings, success, failure);
            var notification = function(notif){
               // alert (notif.message);
            };
    		MFPPush.registerNotificationsCallback(notification); 
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.constant('ratingConfig', {
    max: 5,
    stateOn: null,
    stateOff: null
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('login', {
      cache: false,
     url: '/login',
     templateUrl: 'views/appComponents/login.html',
     controller: 'LoginCtrl',
     controllerAs: 'login'
   }).state('signup', {
            cache: false,
         url: '/signup',
         templateUrl: 'views/appComponents/signup.html',
         controller: 'SignupCtrl',
         controllerAs: 'signup'
     }).state('app', {
            cache: false,
         url: '/app',
         abstract: true,
         templateUrl: 'views/appComponents/menu.html',
         controller: 'AppMenuController',
         controllerAs: 'appMenu'
       })

      .state('app.vendorList', {
            cache: false,
         url: '/vendorlist',
         views: {
           'menuContent': {
             templateUrl: 'views/employee/vendorlist.html',
             controller: 'VendorListController',
             controllerAs: 'vendorList'
           }
         }
       })
      .state('app.confirmOrder', {
            cache: false,
         url: '/confirmOrder',
         views: {
           'menuContent': {
             templateUrl: 'views/employee/confirmOrder.html',
             controller: 'ConfirmOrderController',
             controllerAs: 'confirmOrder'
           }
         }
       })
      .state('app.finishOrder', {
            cache: false,
         url: '/finishOrder',
         views: {
           'menuContent': {
             templateUrl: 'views/employee/finishOrder.html',
             controller: 'FinishOrderController',
             controllerAs: 'finishOrder'
           }
         }
       })
      .state('app.myOrders', {
            cache: false,
         url: '/myOrders',
         views: {
           'menuContent': {
             templateUrl: 'views/employee/myOrders.html',
             controller: 'MyOrdersController',
             controllerAs: 'myOrders'
           }
         }
       })
       .state('app.vendorMenu', {
            cache: false,
         url: '/vendors/:vendorId',
         views: {
           'menuContent': {
             templateUrl: 'views/employee/vendorMenu.html',
             controller: 'VendorMenuController',
             controllerAs: 'vendorMenu'
           }
         }
       })

       .state('app.vendorhome', {
            cache: false,
           url: '/vendorhome',
           views: {
             'menuContent': {
               templateUrl: 'views/vendor/vendorHome.html',
               controller: 'VendorCtrl',
               controllerAs: 'vendor'
             }
           }
         })

         .state('app.vendorOrderList', {
            cache: false,
           url: '/vendororderlist',
           views: {
             'menuContent': {
               templateUrl: 'views/vendor/vendorOrderList.html',
               controller: 'VendorCtrl',
               controllerAs: 'vendor'
             }
           }
         })

         .state('app.orderedMenu', {
            cache: false,
         url: '/orders/:orderId',
         views: {
           'menuContent': {
             templateUrl: 'views/vendor/vendorOrder.html',
             controller: 'VendorOrderController',
             controllerAs: 'vendorOrder'
           }
         }
       });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
