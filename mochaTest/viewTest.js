"use strict";

xdescribe("view", function() {

  beforeEach(function() {
    $("body").append("<div id='weeks-view-test'></div>");
    this.view = new app.WeeksView({
      el: $("#weeks-view-test")
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
    this.view.render();

    expect(this.view.$el.html().match(/Left Weeks/)).to.be.ok;
    expect(this.view.$el.html().match(/You are currently 35/)).to.be.ok;
  });

  it("should have a model associated with it", function() {
    expect(this.view.model).to.be.an.instanceof(Backbone.Model);
  });

  it("will have as many special divs as there are weeksLeft", function() {
    this.view.model.set("years", 36);
    expect(this.view.model.leftWeeks()).to.equal(51);
    expect($(".week-div").length).to.equal(1836);
  });
});
