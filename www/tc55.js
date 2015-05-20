var exec = require('cordova/exec');

var tc55 = {
    listenForScans: function(success, failure) {
        return exec(success, failure, "CordovaTC55Plugin", "listenForScans", []);
    }
};

module.exports = tc55;

window.tc55 = tc55;