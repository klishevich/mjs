module.exports = function setTimeoutP(func, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const res = func();
        resolve(res);
      }
      catch(error) {
        reject(error);
      }
    }, time);
  });
}
