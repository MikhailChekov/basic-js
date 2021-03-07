const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for (let i = 0; i < arr.length; i++) {
      let _count = 1;
      let _elem = arr[i];

      if (Array.isArray(_elem)) {
        _count = _count + this.calculateDepth(_elem);
        if (_count > depth) {
          depth = _count;
        }
      }

    }
    return depth;
  }
}