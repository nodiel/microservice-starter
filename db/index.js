exports.createConnection = function(options) {
  return new Promise((resolve, reject) => {
    // Timeout to simulate some work
    setTimeout(() => {
      console.log(`Creating connection to ${options.uri}.`);
      resolve();
    }, 1000);
  });
};
