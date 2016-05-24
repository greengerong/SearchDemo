'use strict';
import * as studentService from './student.service.js';
import students from '../../data/student.json';

describe('Student Service:', () => {

  it('should got matched students when seach by student name', () => {
    let name = 'ran';
    return studentService.search(name)
      .then(function (data) {
        data.should.deep.equal({
          data: [{
            "age": 28,
            "id": 1,
            "name": "Liu Ran"
          }],
          total: students.length,
          query: name
        })
      });

  });

  it('Should got all students when given student name is empty', () => {
    return studentService.search('')
      .then(function (data) {
        data.should.deep.equal({
          data: students,
          total: students.length,
          query: 'All'
        })
      });
  });
});
