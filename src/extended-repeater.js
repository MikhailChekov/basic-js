const CustomError = require("../extensions/custom-error");
  // set the number of repeat addition string
  // is a string separating repetitions of the addition.


module.exports =  function repeater(str, options) {
  if (!arguments.length) throw new Error();
  if (!arguments[1]) return str;

  if (str === null) {
    str = 'null';
  } else {
    str = String(str);
  }

  const addRep = options.additionRepeatTimes || 1;
  const strRep = options.repeatTimes || 1;
  let add = '';

  if (options.addition == false) {
    add = 'false';
  }
  else if (options.addition === null) {
    add = 'null';
  }
  else {
    // Test to undefined
    if (!!options.addition) {
      add = String(options.addition) || '';
    } else {
      add = '';
    }
  }

  console.log(add);

  const sep = options.separator || '+';
  const addSep = options.additionSeparator || '|';

  let fullAdd = '';
  let res = str;

  if (addRep > 1) {
    fullAdd = add + addSep;
    fullAdd = fullAdd.repeat(addRep);
    fullAdd = fullAdd.split(addSep).filter(e => e).join(addSep);
  } else {
    fullAdd = add;
  }

  if (strRep >= 1) {
    res = str + fullAdd + sep;
    res = res.repeat(strRep);
    res = res.split(sep).filter(e => e).join(sep);
  }

  return res;

};
