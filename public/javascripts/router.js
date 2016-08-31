define(['views/PathHosts', 'views/CollectionHost'],
	function (PathView, CollectionHost) {

	var AppRouter = Backbone.Router.extend({
		currentView: null,
		socketEvents: _.extend({}, Backbone.Events),
		routes: {
			'index': 		'index',
            'list' :        'listHost'
		},
		changeView: function (View) {
			if(null != this.currentView)
				this.currentView.undelegateEvents();
			this.currentView = View;
			this.currentView.render();
		},
		index: function () {
            this.socketEvents.on('show.collections.host', this.listHost, this);
            var view = new PathView({socketEvents: this.socketEvents});
            this.changeView(view);
		},
        listHost: function(data) {
            var view = new CollectionHost({socketEvents: this.socketEvents, data: data});
            this.changeView(view);
        }
	});

	return new AppRouter();
});