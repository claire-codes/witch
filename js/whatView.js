var app = app || {};

(function($) {
    'use strict';

    app.whatView = Backbone.View.extend({
        el: '#whatView',

        template: Handlebars.compile($("#what-template").html()),

        events: {},

        initialize: function() {
            this.model = new app.whatModel();
            var self = this;
            this.model.fetch({
                success: function() {
                    self.render();
                },
                error: function() {
                }
            });
        },

        render: function() {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
        }
    });
})(jQuery);