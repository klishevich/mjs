export function myOtherModule() {
  const hello = 'hello';
  const bye = 'goodbye';
  this.hello = function() {
    return hello;
  }

  this.bye = function() {
    return bye;
  }
}
