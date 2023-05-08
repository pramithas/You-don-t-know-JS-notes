var v;
typeof v; //"undefined"
v="1" 
typeof v // "string"
v=2;
typeof v //"number"
v=true;
typeof v // "boolean"
v = {};
typeof v // "object"
v = Symbol();
typeof v // "symbol"

v=null;
typeof v // "object" interesting: Historically, to unset a value such as number, undefined is used. And, to unset an object, null is used.
// That might be the reason why the type of num returns as object. It is kind of a bug. So, when we are checking whether the type of something
// is object, it is not null.

v= function(){};
typeof v //"function"

v =[1,2,3];
typeof v //"object"

// Note that typeof operator always returns a string. 

// Big int
var v = 42n; // or BigInt(42)
typeof v; // "bigint"
