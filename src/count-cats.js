const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  if(!arguments.length) return count;
  if(!arr.length) return count;

  arr = arr.reduce((ac, e, i) => {
    return ac.concat(e);
  }, [])

  arr.filter(e => {
    if(e) return e;
  }).forEach(element => {
    if(typeof element == 'string'){
      if(element === '^^') count++;
    }
  });

  return count;

};
