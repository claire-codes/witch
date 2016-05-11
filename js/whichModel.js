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
                this.set("uniqueTech",[]);
            } else {
                var objProps = [],
                    dupProps = [];
                $.each(this.get("repos"), function(ind, elm) {
                    objProps.push(elm);
                });
                dupProps = $.map(objProps, function(n) {
                    return n;
                });
                var tmp = dupProps.filter(function(value, index, self) {
                    return self.indexOf(value) === index;
                });
                this.set("uniqueTech",tmp);
            }
        }
    });
})(jQuery);