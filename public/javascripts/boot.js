require.config({
	paths: {
		jQuery: '/javascripts/vendor/jquery-3.1.0.min',
        bootstrap: '/javascripts/vendor/bootstrap.min',
		underscore: '/javascripts/vendor/underscore',
		Backbone: '/javascripts/vendor/backbone',
		text: '/javascripts/vendor/text'
	},
	shim: {
		'Backbone': ['underscore', 'jQuery'],
        'bootstrap': ['jQuery'],
		'App': ['Backbone', 'bootstrap']
	}
});

require(['App'], function (App) {
	App.initialize();
});
