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
            if ($.isEmptyObject(this.get("repos"))) {
                this.set("uniqueTech", []);
            } else {
                var allFlatProps = [],
                    uniProps = [];
                $.each(this.get("repos"), function(ind, repoArr) {
                    $.map(repoArr, function(elm) {
                        allFlatProps.push(elm);
                    });
                });
                uniProps = allFlatProps.filter(function(value, index, self) {
                    return self.indexOf(value) === index;
                });
                this.set("uniqueTech", uniProps);
            }
        }
    });
})(jQuery);