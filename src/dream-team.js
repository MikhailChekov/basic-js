const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!arguments.length) return false;
  if(!Array.isArray(arr)) return false;
  if(!arr.length) return false;

  return arr.filter(e => {
    if(typeof e == 'string'){
      return e;
    }
  }).map(e => {
    e = e.trim();
    return e[0].toUpperCase();
  }).sort().join('');
};
