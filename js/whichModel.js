var app = app || {};

(function($) {
    "use strict";

    app.whichModel = Backbone.Model.extend({
        defaults: {
            repos: {},
            uniqueTech: []
        },

        url: "data/repos.json",

        getUniqueTech: function() {
            if ($.isEmptyObject(this.repos)) {
                this.uniqueTech = [];
            } else {
                var objProps = [],
                    dupProps = [];
                $.each(this.repos, function(ind, elm) {
                    objProps.push(elm);
                });
                dupProps = $.map(objProps, function(n) {
                    return n;
                });
                this.uniqueTech = dupProps.filter(function(value, index, self) {
                    return self.indexOf(value) === index;
                });
            }
        }
    });
})(jQuery);