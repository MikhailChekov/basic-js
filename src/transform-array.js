const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let newArr = [];
  let isAffectedPrev = false;

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    let last = arr.length - 1;
    let next = arr[i + 1];
    let prev = arr[i - 1];

    switch (elem) {
      case '--discard-next':
        if (i !== last) {
          i++;
          isAffectedPrev = true;
        }
        break;
      case '--discard-prev':
        // check for existing number and not affected
        if (!isAffectedPrev && i !== 0) {
          newArr.pop();
        }
        break;
      case '--double-next':
        if (i !== last) {
          newArr.push(next);
        }
        break;

      case '--double-prev':
        // check for existing number and not affected
        if (!isAffectedPrev && i !== 0) {
          newArr.push(prev);
        }
        break;
      default:
        newArr.push(elem);
        isAffectedPrev = false;
    }

  }
  return newArr;
};