const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';
  if(!date instanceof Date) throw new Error();
  if(Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
  if (!new Date(date)) throw new Error();


  let newDate = new Date(date);

  let season = '';

  switch (newDate.getMonth()) {
    case 0:
      season = 'winter';
      break;
    case 1:
      season = 'winter';
      break;
    case 2:
      season = 'spring';
      break;
    case 3:
      season = 'spring';
      break;
    case 4:
      season = 'spring';
      break;
    case 5:
      season = 'summer';
      break;
    case 6:
      season = 'summer';
      break;
    case 7:
      season = 'summer';
      break;
    case 8:
      season = 'fall';
      break;
    case 9:
      season = 'fall';
      break;
    case 10:
      season = 'fall';
      break;
    case 11:
      season = 'winter';
  }

  return season;
};