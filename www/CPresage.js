
var exec = require('cordova/exec');

var CPresage = {
	adToServe: function(onAdEvent, onAdNotFound) {
		cordova.exec(onAdEvent, onAdNotFound, 'CPresage', 'adToServe', [{}]);
	}
};

module.exports = CPresage;
