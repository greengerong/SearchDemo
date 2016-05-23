'use strict';

(function () {

  class MainController {

    constructor($http) {
      this.$http = $http;
    }

    search(name = '') {
      return this.$http.get('/api/student', { params: { name } })
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
