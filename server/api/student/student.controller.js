'use strict';

var studentService = require('./student.service');

function respondWithResult(res, statusCode = 200) {
  return function (entity) {
    res.status(statusCode).json(entity);
  };
}

function handleError(res, statusCode = 500) {
  return function (err) {
    res.status(statusCode).send(err);
  };
}

export function search(req, res) {
  return studentService
    .search(req.query.name)
    .then(respondWithResult(res))
    .catch(handleError(res));
}