var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
	var search = require('./pages/search.js');
    var students = require('../data/data.js').students;
	
    this.Given(/^user open student search system$/, function (done) {
        browser.driver.get('http://127.0.0.1:9000/');
        expect(browser.driver.getTitle()).to.eventually.equal(search.getTitle()).and.notify(done);
    });

    this.When(/^search a student with "([^"]*)"$/, function (Name, done) {
        search.fillStudentName(Name);
        search.clickSearchButton();
        expect(browser.driver.getTitle()).to.eventually.equal(search.getTitle()).and.notify(done);
    });

    this.When(/^get the detail of "([^"]*)"$/, function (Name, done) {        
        var age = element(by.repeater('item in $ctrl.studentResult.data').row(0).column('item.age')).getText();
        expect(age).to.eventually.equal(students[Name]['Age'].toString()).and.notify(done);
    });
};