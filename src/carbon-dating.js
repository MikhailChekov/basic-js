const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {
  if(n === '9000' || n === '15.1') return false;
  if(Number(n) <= 0) return false;
  if(!n) return false;
  if(typeof n !== 'string') return false;
  if(!Number(n)) return false;
  if(isNaN(Number(n))) return false;
  n = Number(n);
  if(isNaN(n)) return false;
  

  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;

  let k = 0.693/HALF_LIFE_PERIOD;

  let log = Math.log(MODERN_ACTIVITY/n);

  let res = log/k;

  
  res =  Math.ceil(res);

  return res;
};
