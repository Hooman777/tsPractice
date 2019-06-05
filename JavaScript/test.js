var doSomething = function () { return setTimeout(function () { return console.log("it is done!"); }, 3000); };
console.log('before the executation');
doSomething();
console.log('After the executation');
