console.log('starting async-basics.js...');

setTimeout(() => {
    console.log('Inside of callback');
},200);

setTimeout( () => {
    console.log('0 seconds timeout...');
},0);

console.log('finishing async.basics.js...');
