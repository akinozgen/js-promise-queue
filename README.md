# jq-promise-queue

Usage: 
```javascript
const promiseQ = require('./index.js');
const worker = function (x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Worker: ', x));
        }, 500);
    });
};

// First parameter: worker thread
// Second parameter worker parameters
promiseQ.enqueue(worker, { i });
promiseQ.startQueue(0);
```