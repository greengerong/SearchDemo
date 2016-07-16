module.exports = function () {
    var Cucumber = require('cucumber');
    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    var fs = require('fs');
    var path = require('path');
    JsonFormatter.log = function (json) {
        fs.writeFile('./target/report/e2e.json', json, function (err) {
            if (err)throw err;
        });
    };
    this.registerListener(JsonFormatter);
};