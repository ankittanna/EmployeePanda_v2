cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/ibm-mfp-core/www/BMSClient.js",
        "id": "ibm-mfp-core.BMSClient",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "BMSClient"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPRequest.js",
        "id": "ibm-mfp-core.MFPRequest",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPRequest"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPLogger.js",
        "id": "ibm-mfp-core.MFPLogger",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPLogger"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPAnalytics.js",
        "id": "ibm-mfp-core.MFPAnalytics",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPAnalytics"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPAuthorizationManager.js",
        "id": "ibm-mfp-core.MFPAuthorizationManager",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPAuthorizationManager"
        ]
    },
    {
        "file": "plugins/ibm-mfp-push/www/MFPPush.js",
        "id": "ibm-mfp-push.MFPPush",
        "pluginId": "ibm-mfp-push",
        "clobbers": [
            "MFPPush"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "ibm-mfp-core": "1.0.10",
    "ibm-mfp-push": "1.0.12",
    "phonegap-plugin-barcodescanner": "4.1.0"
}
// BOTTOM OF METADATA
});