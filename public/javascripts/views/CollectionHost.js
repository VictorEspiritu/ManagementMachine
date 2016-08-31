/**
 * Created by heureka on 30/08/16.
 */
define(['text!templates/listHosts.html', 'views/Host'], function (listTemplate, HostView) {

    var ListView = Backbone.View.extend({
        el:'<section>',
        events: {
            'click #btnNewHost': 'newHost',
            'click #btnSaveHost': 'saveHost'
        },
        initialize: function (options) {
            this.socketEvents = options.socketEvents;
            this.socketEvents.on('collection.host:add', this.addHost, this);
            this.socketEvents.on('collection.host:addAll', this.addAllHost, this);
            this.data = options.data;
        },
        render: function () {
            this.$el.html(listTemplate);
            $('.result-process').html(this.$el);
            this.addAllHost(this.data);
        },
        newHost: function () {
            console.log('new hosts');
        },
        saveHost: function () {
            console.log('save hosts');
        },
        addHost: function (host) {
            new HostView({parent: this.$el.find('tbody')}).render(host);
        },
        addAllHost: function (data) {
            if ('object' !== typeof data) {
                return;
            }
            var self = this;

            data.forEach(function (e) {
                self.addHost(e);
            });
        }
    });

    return ListView;
});