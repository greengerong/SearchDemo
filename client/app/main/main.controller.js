'use strict';

(function () {

  class MainController {

    constructor(studentService) {
      this.studentService = studentService;
    }

    search(name) {
      return this.studentService.search(name)
        .then(response => this.studentResult = response.data)
        .catch(error => this.error = error.data);
    }
  }

  angular.module('com.github.greengerong.search')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
