'use strict';
import _ from 'lodash';
import proxyquire from 'proxyquire';

let proxy = proxyquire.noPreserveCache(),
  studentCtrlStub = {
    search: _.noop
  },
  routerStub = {
    get: sinon.spy()
  },
  studentIndex = proxy('./index.js', {
    'express': {
      Router: function () {
        return routerStub;
      }
    },
    './student.controller': studentCtrlStub
  });

describe('Student API Router:', () => {

  it('should return an express router instance', () => {
    studentIndex.should.equal(routerStub);
  });

  describe('GET /api/student?name=:name', () => {

    it('should route to thing.controller.index', () => {
      routerStub.get
        .withArgs('/', studentCtrlStub.search)
        .should.have.been.calledOnce;
    });
  });
});
