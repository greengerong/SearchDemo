'use strict';

(function () {

  class StudentService {

    constructor($http) {
      this.$http = $http;
    }

    search(name = '') {
      return this.$http.get('/api/student', { params: { name } });
    }
  }

  angular.module('com.github.greengerong.search')
      .service('studentService', StudentService);
})();
