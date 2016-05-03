var app = app || {};

(function($) {
    "use strict";

    app.whichModel = Backbone.Model.extend({
        defaults: {
            repos: {}
        },

        url: "data/repos.json"
    });
})(jQuery);