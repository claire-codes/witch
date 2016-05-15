"use strict";

describe("view", function() {

    beforeEach(function() {
        $("body").append("<div id='which-view-test'></div>");
        this.view = new app.whichView({
            el: $("#which-view-test")
        });
    });

    afterEach(function() {
        this.view = null;
    });

    it("should be a Backbone View object", function() {
        expect(this.view).to.be.ok;
        expect(this.view).to.be.an("object");
        expect(this.view).to.be.an.instanceof(Backbone.View);
    });

    it("should have default div tagname", function() {
        expect(this.view.tagName).to.equal("div");
        expect(this.view.el.tagName.toLowerCase()).to.equal("div");
    });

    it("render static text and variables correctly", function() {
        // this.view.model.getUniqueTech();
        this.view.render();

        expect(this.view.$el.html().match(/Which project did I use that in?/)).to.be.ok;
        // expect(this.view.$el.html().match(/clairex: es6, chaining/)).to.be.ok;
    });

    it("should have a model associated with it", function() {
        expect(this.view.model).to.be.an.instanceof(Backbone.Model);
    });

});