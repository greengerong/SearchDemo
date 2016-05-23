'use strict';

(function () {

  class MainController {

    constructor(studentServicehttp) {
      this.studentService = studentService;
    }

    search(name) {
      return studentService
        .then(response => {
          this.studentResult = response.data;
        });
    }
  }

  angular.module('searchDemoApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
