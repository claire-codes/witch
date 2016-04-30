var app = app || {};

(function($) {
    'use strict';
    
    app.whatView = Backbone.View.extend({
        el: '#whatView',
        
        template: Handlebars.compile($("#what-template").html()),
        
        events: {},
        
        initialize: function() {
            console.log("Hello");
            this.render();
        },
        
        render: function() {
            var html = this.template();
            this.$el.html(html);
            console.log("rendereing");
        }
    });
})(jQuery);