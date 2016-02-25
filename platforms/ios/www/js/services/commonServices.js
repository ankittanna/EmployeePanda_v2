function commonServices($http) {
    'use strict';
    // config for notification
    this.notificationConfig = {
                    alert: true,
                    badge: true,
                    sound: true
                };

    this.notificationApp = "http://EmpPanda.mybluemix.net";
    this.notificationAppSecretKey = "43694daf-8689-477f-b21d-9e068e18301c";

    return {
        notificationConfig: this.notificationConfig,
        notificationApp: this.notificationApp,
        notificationAppSecretKey: this.notificationAppSecretKey
    };
}

angular.module('EmployeePanda.services')
    .factory('CommonServices', commonServices);

commonServices.$inject = ['$http'];