'use strict';

import express from 'express';
var controller = require('./student.controller');

var router = express.Router();

router.get('/', controller.search);

module.exports = router;
