var testData = function(){
    var yaml = require('js-yaml');
    var fs = require('fs');
    this.students = yaml.safeLoad(fs.readFileSync('./src/features/data/students.yml','utf8'));
};

module.exports = new testData();