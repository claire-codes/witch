var app = app || {};

(function($) {
    'use strict';

    app.whatModel = Backbone.Model.extend({
          defaults: {
              repos: {}
          },

          url: "data/repos.json"
    });
})(jQuery);