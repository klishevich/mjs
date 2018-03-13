define(function (require) {
  const myModule = function myModule() {
    const hello = 'hello';
    const bye = 'goodbye';
    this.hello = function() {
      return hello;
    }

    this.bye = function() {
      return bye;
    }
  }
  return myModule;
});
