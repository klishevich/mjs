export default function myModule() {
  const hello = 'hello';
  const bye = 'goodbye';
  this.hello = function() {
    return hello;
  }

  this.bye = function() {
    return bye;
  }
}
