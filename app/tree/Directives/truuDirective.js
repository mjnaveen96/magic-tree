(function () {
  angular
  .module('magicTree')
  .directive('truuDirective',treeDirectiveFun);
  treeDirectiveFun.$inject = ['$http'];
  function treeDirectiveFun($http) {
    return{
      link : treeFun,
      templateUrl:"app/tree/Templates/treeTemplate.html"
    }
    function treeFun(scope,element,attrs) {
      dat=scope.empId;
      scope.data;
      scope.treeArr=[];
      scope.childTreeArr = [];
      scope.viewArr = [];
$http({
  method: 'GET',
  url:'newdata.json'
}).then(function(response) {
  scope.data=response.data;
})

scope.search = function(id, stat = false) {
  if(stat === true) {
    scope.viewArr.length = 0;
  }
  for(let i = 0; i < scope.data.length; i++) {

    if(scope.data[i].id === id) {
      scope.treeArr.unshift(scope.data[i].id);
        scope.viewArr.unshift(scope.data[i]);
            // console.log(scope.viewArr);
      if(scope.data[i].parent[0] != "Null") {
        scope.search(scope.data[i].parent[0]);
      } else {

        // createTree(scope.treeArr);
        // scope.treeArr.length = 0;
      }
    }
  }
}

scope.getChild = function(index,stat = false,ind) {
  if(stat === true) {
    scope.childTreeArr.length = 0;
  }
  // scope.treeArr.splice(ind+1,scope.treeArr.length-1);
  // scope.getChild = function(id) {
  for(let i=0; i < scope.data.length;i++){
    if(scope.data[i].id === index){
      for(let j = 0; j < scope.data[i].Children.length; j++)
      {
        if (scope.data[i].Children[j] != "Null") {
          scope.childTreeArr.push(scope.data[i].Children[j]);
          for (let f = 0; f < scope.data.length; f++){
            if (scope.data[f].id === scope.data[i].Children[j]) {
              if(scope.viewArr.includes(scope.data[f])){
                console.log("Includes");
              }else {
                scope.viewArr.push(scope.data[f]);
                console.log(scope.viewArr);
              }
            }
          }


          // console.log(scope.viewArr);
          // scope.myVar = !scope.myVar;
          // console.log(scope.data[i].Children[j]);
        }
      }
    }
  }
}

// function createTree(elem){
//   // elem = elem.slice();
//   // var element = document.getElementById("tree");
//   // element.innerHTML = "";
//   for(i = 0 ; i < elem.length ; i++){
//       var para = document.createElement("div");
//       var node = document.createTextNode(elem[i]);
//       var element = document.getElementById("tree");
//       para.setAttribute('ng-click', `getChild('${elem[i]}')`);
//        para.setAttribute("id", "innerTree");
//       para.appendChild(node);
//       element.appendChild(para);
//   }
// }




  }

  }
})();
