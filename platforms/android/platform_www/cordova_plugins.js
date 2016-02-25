cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
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
    "cordova-plugin-console": "1.0.2",
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-splashscreen": "3.1.0",
    "cordova-plugin-statusbar": "2.1.0",
    "cordova-plugin-whitelist": "1.2.1",
    "ionic-plugin-keyboard": "1.0.8",
    "ibm-mfp-core": "1.0.10",
    "ibm-mfp-push": "1.0.12",
    "phonegap-plugin-barcodescanner": "4.1.0"
}
// BOTTOM OF METADATA
});