define(['router'], function (router) {
	var initialize
	  , runApplication;

	initialize = function () {
		runApplication();
	};

	/*chekLogin = function (callback) {
		$.ajax('/account/authenticated', {
			method:'GET',
			success: function (data) {
				router.socketEvents.trigger('app:loggedin', data);
				return callback(true);
			},
			error: function (data) {
				return callback(false);
			}
		});
	};*/

	runApplication = function () {
	    window.location.hash = 'index';
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});