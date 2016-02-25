function nativeServices($http, $q) {
    'use strict';

    this.scanQRcode = function(currOrderNumber)
    {

       var deferred = $q.defer();
       var currentOrderNumber = currOrderNumber;
       cordova.plugins.barcodeScanner.scan(
            function (result) {
                var orderNumber = result.text.split('-')[0];
                var orderBy = result.text.split('-')[1];

                // alert(orderNumber + ' ' + currentOrderNumber);

                if(orderNumber == currentOrderNumber)
                {
                     alert("Order Matched!");
                     result.status = 'success';

                } else
                {
                    alert("Order Number Not Matching!");
                    result.status = 'failure';
                }

                deferred.resolve(result);

                //$scope.orderInfo = "Order is Delivered";
                //$state.go('app.vendorOrderList');

            },
            function (error) {
                // alert("Scanning failed: " + error);
                result.status = 'error';
                deferred.resolve(error)
            }
         );

         return deferred.promise;
    }

    return {
        scanQRcode: this.scanQRcode
    };
}

angular.module('EmployeePanda.services')
    .factory('NativeServices', nativeServices);

nativeServices.$inject = ['$http', '$q'];
