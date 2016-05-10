var app = app || {};

(function($) {
    "use strict";

    app.whichView = Backbone.View.extend({
        el: "#whichView",

        template: Handlebars.compile($("#which-template").html()),

        events: {},

        initialize: function() {
            this.model = new app.whichModel();
            var self = this;
            this.model.fetch({
                success: function() {
                    self.model.getUniqueTech();
                    self.render();
                },
                error: function() {}
            });
        },

        render: function() {
            var html = this.template(this.model.toJSON());
            app.WhichFilter.init("#filter-box","#repo-list li");
            this.$el.html(html);
        }
    });
})(jQuery);