'use strict';

describe('Component: mainComponent', function () {

  beforeEach(module('com.github.greengerong.search'));

  let mainComponent;

  beforeEach(inject(function ($componentController) {
    mainComponent = $componentController('main');
  }));

  it('should get students when search by student name', inject(function ($httpBackend) {
    let name = 'abc',
      response = {
        data: [{
          id: 1,
          name,
          age: 1
        }],
        total: 1
      }

    $httpBackend.expectGET('/api/student?name=' + name).respond(response);

    mainComponent.search(name);
    $httpBackend.flush();

    mainComponent.studentResult.should.deep.equal(response);
  }));

  it('should get error when search api throw error', inject(function ($httpBackend) {
    let name = 'abc',
      error = 'Service error!';

    $httpBackend.expectGET('/api/student?name=' + name).respond(500, error);

    mainComponent.search(name);
    $httpBackend.flush();

    mainComponent.error.should.deep.equal(error);
  }));

});
