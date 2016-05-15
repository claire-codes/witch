"use strict";

describe("WhichModel", function() {

    beforeEach(function() {
        this.model = new app.whichModel();
    });

    var testRepos = {
        "clairex": ["module", "javascript"],
        "generator-clekyll": ["yeoman", "clairex", "javascript"],
        "left-weeks": ["javascript"]
    };

    it("should be a Backbone Model", function() {
        expect(this.model).to.be.an("object");
        expect(this.model).to.be.an.instanceof(Backbone.Model);
    });

    it("should have certain defaults", function() {
        expect(this.model.get("repos")).to.eql({});
        expect(this.model.get("uniqueTech")).to.eql([]);
        expect(this.model.url).to.eq("data/repos.json");
    });

    describe("#getUniqueTech", function() {
        it("will return blank if repos is blank", function() {
            this.model.getUniqueTech();
            expect(this.model.get("uniqueTech")).to.eql([]);
        });

        it("will flatten them into a list and remove dupes", function() {
            this.model.set("repos", testRepos);
            this.model.getUniqueTech();
            expect(this.model.get("uniqueTech")).to.eql(["module", "javascript", "yeoman", "clairex"]);
        });
    });

});