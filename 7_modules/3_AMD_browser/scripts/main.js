requirejs(['helper/sum', 'helper/myClassModule', '../node_modules/lodash/join'], function(sum, myOtherModule, lodashJoin) {
  //This function is called when scripts/helper/sum.js is loaded.
  //If sum.js calls define(), then this function is not fired until
  //sum's dependencies have loaded, and the sum argument will hold
  //the module value for "helper/sum".
  
  // sum module 
  window.calcSum = () => {
    const res = sum(1, 2);
    document.getElementById("sum").innerHTML = res;
    console.log(res);
  }

  // myClassModule
  myOtherModuleInstance = new myOtherModule();

  // Lodash
  function join() {
    const res = lodashJoin(['Lodash', 'Join'], ' ');
    return res;
  }
  window.join = join;
});
