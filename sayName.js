// each file we create is a module that we can export or import

const sayName = () => {
  console.log("Hello there usman");
};

const sayAddress = () => {
  console.log(`123 ABC Lane`);
};

module.exports.sayName = sayName; // exports using module.export
module.exports.sayAddress = sayAddress; // export object
