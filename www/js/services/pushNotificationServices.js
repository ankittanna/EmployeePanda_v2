function pushNotificationServices($http,DetailsService,CommonServices, $state) {
    'use strict';
     var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

     function registerPushNotification()
     {
        console.log("PUSH NOTIFICATION REGISTERED");
        var notificationConfig = CommonServices.notificationConfig;

        BMSClient.initialize(CommonServices.notificationApp, CommonServices.notificationAppSecretKey);
            var success = function(message) {
                var deviceId = JSON.parse(message).deviceId;
                DetailsService.deviceIdInfo.deviceIdInfo.set(deviceId);
                // window.localStorage['empLocStorage'] = deviceId;
                $state.go('login');
            };

            var failure = function(message) { alert("Error Registering Push Notifications: " + message); };

            var settings = {
                ios: CommonServices.notificationConfig,
                android: CommonServices.notificationConfig
            };

            MFPPush.registerDevice(settings, success, failure);

            var notification = function(notif){
                alert(notif.message);
                if(notif.message.indexOf('a new order from'))
                {
                    console.log('comes here in vendor');
                    angular.element(document.getElementById('vendorHomeScreen')).scope().updateOrders();
                    $state.go('app.vendorhome');
                } else if(notif.message.indexOf('is ready to collect from'))
                {
                // console.log('comes here in employee' + notif.message.indexOf('You have got a new order from') + ' ' + notif.message.indexOf('is ready to collect from'));
                    // Do Something
                    // $state.go('app.vendorhome');
                }
            };

            MFPPush.registerNotificationsCallback(notification); 
     }

    // Object Map of functions
    return {
        registerPushNotification: registerPushNotification
    };
}

angular.module('EmployeePanda.services')
    .factory('PushNotificationServices', pushNotificationServices);

pushNotificationServices.$inject = ['$http','DetailsService', 'CommonServices', '$state'];