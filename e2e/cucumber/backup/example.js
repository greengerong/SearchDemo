   describe("sayHello", function () {
     it("should say hello", function(done) {

       helloProvider
         .uponReceiving("a request for hello")
         .withRequest("get", "/sayHello")
         .willRespondWith(200, {
           "Content-Type": "application/json"
         }, {
           reply: "Hello"
         });

       //Run the tests
       helloProvider.run(done, function(runComplete) {
         expect(client.sayHello()).toEqual("Hello");
         runComplete();
       });
     });
   });


   pact.js

   import {runPact, runPacts} from 'pact-js-provider'

   runPact('./test/service_consumers/pact_helper')



function switchMary(turnOn, done) {
  let urlPath = turnOn ? '/update/on' : '/update/off'
  let post_options = {
    url: 'http://localhost:5000' + urlPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
}
……
provider_states_for('Animal Service', 'Zoo App', './pacts/zoo_app-animal_service.json',
  'http://localhost:5000', (done) => {
  providerState('there is an alligator named Mary', (done) = > {
    setUp( (done) = > {
      switchMary(true, done)
    }
   )
   it(() = > {}
   )
   tearDown((done) = > {
     done()
   })
  })
})


this.Given(/^user open student search system$/, function (done) {
  browser.driver.get('http://127.0.0.1:9000/');
  expect(browser.driver.getTitle()).to.eventually.equal(search.getTitle()).and.notify(done);
});

this.When(/^search a student with "([^"]*)"$/, function (Name, done) {
  search.fillStudentName(Name);
  search.clickSearchButton();
  expect(browser.driver.getTitle()).to.eventually.equal(search.getTitle()).and.notify(done);
});

var SearchPage = function () {
  var students = require().students;
  const UIElementsArray = [
    ['Search', ['Search', 'button']],
    ['Search name', ['searchName', 'model']]
  ];
  var elementsMap = new Map(UIElementsArray);
  this.getUIElement = function(elementName) {
    return elementsMap.get(elementName.toString())[0];
  };
......
  this.fillStudentName = function(name) {
    element(by.model(this.getUIElement('Search name'))).sendKeys(name);
  };

  this.clickSearchButton = function() {
    element(by.buttonText(this.getUIElement('Search'))).click();
  };
};


var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();





