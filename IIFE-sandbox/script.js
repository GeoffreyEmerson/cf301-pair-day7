// Sandbox for IIFE-sandbox

(function(module) {

  function sayHello(name){
    console.log('Hello,',name);
  }

  function secret(){
    console.log('My Social Security Number');
  }

  module.sayHello = sayHello;
})(window);
