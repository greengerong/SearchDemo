'use strict';
import proxyquire from 'proxyquire';

let proxy = proxyquire.noPreserveCache(),
  res = {
    json: sinon.spy(),
    send: sinon.spy(),
    status: sinon.stub().returnsThis
  };

describe('Student Controller:', () => {

  it('should got student when seach by student name', () => {
    let data = {
      data: [{
        id: 1,
        name:
        'Liu Ran',
        age: 30
      }],
      total: 5
    };

    let studentController = proxy('./student.controller.js', {
      './student.service': {
        search: sinon.stub().returns(Promise.resolve(data))
      }
    });

    return studentController.search({ query: { name: 'ran' } }, res)
      .then(function () {
        res.json.withArgs(data).should.have.been.calledOnce;
        //res.json.withArgs(data).should.not.have.been.calledOnce;
        // res.json.withArgs(data).should.have.been.called;
        // res.json.withArgs(data).should.have.been.calledTwice;
      });
  });

  it('Should got error when search student error', () => {
    let error = 'error found student by this name!';

    let studentController = proxy('./student.controller.js', {
      './student.service': {
        search: sinon.stub().returns(Promise.reject(error))
      }
    });

    return studentController.search({ query: { name: 'ran' } }, res)
      .then(function () {
        // res.status.withArgs(1).should.not.have.been.calledOnce;
        res.send.withArgs(error).should.have.been.calledOnce;
      })
  });
});
