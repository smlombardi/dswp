(function () {
  'use strict';
  angular.module('app').controller('AppController', function ($scope, $log) {
    var _this = this;
    _this.foo = 'bar';
    $log.debug(_this.foo);
  });
})();
