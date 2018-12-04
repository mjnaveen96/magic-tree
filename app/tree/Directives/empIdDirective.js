(function () {
  angular
  .module('magicTree')
  .directive('empIdDirective',empIdDirectiveFun);
  function empIdDirectiveFun() {
    return {
      templateUrl:"app/tree/Templates/empIdTemplate.html"
    }
  }
})();
