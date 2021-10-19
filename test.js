const promiseQ = require('./index.js');

for (let i = 1; i <= 1000; i++) {
  let worker = function (x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Worker: ', x));
      }, 500);
    });
  };

  promiseQ.enqueue(worker, { i });

}

promiseQ.startQueue(0);