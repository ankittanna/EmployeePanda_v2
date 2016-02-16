function pushNotificationServices($http,DetailsService,CommonServices) {
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
                //alert("DeiviceLocal"+DetailsService.deviceIdInfo.deviceIdInfo.get());
            };

            var failure = function(message) { alert("Error Registering Push Notifications: " + message); };

            var settings = {
                ios: CommonServices.notificationConfig,
                android: CommonServices.notificationConfig
            };

            MFPPush.registerDevice(settings, success, failure);

            var notification = function(notif){
                alert("HELLO NOT "+notif.message);
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

pushNotificationServices.$inject = ['$http','DetailsService', 'CommonServices'];