(function () {
  angular
  .module('magicTree')
  .directive('treeDirective',treeDirectiveFun);
  treeDirectiveFun.$inject = ['$http'];
  function treeDirectiveFun($http) {
    return{
      link : treeFun,
      templateUrl:"app/tree/Templates/treeTemplate.html"
    }
    function treeFun(scope,element,attrs) {

$http({
  method: 'GET',
  url:'maindata.json'
}).then(function(response) {
  console.log(response.data)
  // scope.data = response.data[0].Children[i];
  scope.datArr=[];
  for(i=0;i<1;i++){
    scope.datArr.push(response.data[i].id);
    console.log(scope.data = response.data[i].id);
  for(j=0;j<3;j++){
    console.log(scope.data = response.data[i].items[j].id);
    scope.datArr.push(response.data[i].items[j].id);
    for(k=0;k<2;k++){
      scope.datArr.push(response.data[i].items[j].items[k].id);
      console.log(scope.data = response.data[i].items[j].items[k].id);
    }
  }

  }
  // scope.data = response.data[0].Children[0];
  // scope.data = response.data;
  // child(scope.data);
})

      // fetch("maindata.json").then(function(response) {
      //   response.json().then(function(data) {
      //     console.log(data);
      //   })
      // })
      // var i=JSON.parse(data);
    }
  }
})();
