/**
 * Created by heureka on 30/08/16.
 */
define(['text!templates/host.html'], function (hostTemplate) {

    var HostView = Backbone.View.extend({
        el:'<tr>',
        events: {
            'click #btnStatus': 'actionStatus',
            'click #btnLog': 'viewLog',
            'click #btnDelete': 'deleteHost'
        },
        initialize: function (options) {
            this.$parent = options.parent;
        },
        render: function (host) {
            this.$parent.append(this.$el.html(_.template(hostTemplate, {host: host})));
        },
        actionStatus: function () {
            console.log('action Status');
        },
        viewLog: function () {
            console.log('viewLog hosts');
        },
        deleteHost: function (host) {
            console.log('delete hosts');
        }
    });

    return HostView;
});