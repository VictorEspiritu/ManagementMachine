/**
 * Created by heureka on 30/08/16.
 */
define(['text!templates/pathHosts.html'], function (pathTemplate) {

    var PathView = Backbone.View.extend({
       el:$('.container'),
       events: {
          'click #btnAnalyze': 'runAnalyze',
          'click #inputHosts': 'changeInput'
       },
       initialize: function (options) {
           this.socketEvents = options.socketEvents;
       },
       render: function () {
           this.$el.html(pathTemplate);
       },
       runAnalyze: function () {

           var self = this;

           $.ajax('/services/analyzeHosts', {
               method:'POST',
               data: 'path=' + this.$el.find('#inputHosts').val(),
               success: function (data) {
                   if(data.code === 1000) {
                       console.log('Append', data)
                       self.socketEvents.trigger('show.collections.host',data.payload);
                   }else {
                       self.$el.find('.message-result').text('El archivo no existe o es incorrecto');
                       console.log(data)
                   }
               },
               error: function (data) {
                   console.log('fail', data)
               }
           });
       },
       changeInput: function () {
           console.log('cambio de hosts');
       }
    });

    return PathView;
});