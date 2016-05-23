'use strict';

angular.module('searchDemoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  });
