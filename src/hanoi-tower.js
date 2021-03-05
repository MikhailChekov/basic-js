const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(nums, seconds) {

  
  const length = nums - 3;
  let turns = 0;

  if(nums == 2){
    turns = 3;
  } else {
    turns = 7;
  }

  if (nums > 3) {
    for (let i = 0; i < length; i++) {
      turns *= 2;
      turns += 1;
    }
  }

  

  let sec = seconds / 3600;
  let time = 0;

  time = seconds / 3600;
  let gameTime = turns / time;

  gameTime = Math.floor(gameTime);

  return {
    turns: turns,
    seconds: gameTime
  }

};
