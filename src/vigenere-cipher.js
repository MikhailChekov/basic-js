const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(flag = true){
    this.flag = flag;
    this.abc = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'
    ]
  }

  increaseKeyLength(message, key) {
    let modKey = key;
    if (message.length > key.length) {
      let rest = message.length - key.length;
      let quotient = Math.floor(rest / key.length);
      let remainder = rest % key.length;
      if (quotient >= 1) {
        let chunk = key.repeat(quotient);
        modKey += chunk;
      }
      if (remainder) {
        for (let i = 0; i < remainder; i++) {
          modKey += key[i];
        }
      }
    }
    return modKey;
  };

  encrypt(message, key) {
    if(!arguments[0] || !arguments[1]) throw new Error();
    let increaseKey = this.increaseKeyLength(message, key);
    message = message.toUpperCase().split('');
    key = increaseKey.toUpperCase().split('');

    let res = [];
    let positionKey = -1;
    
    message.forEach(e => {
      if(this.abc.includes(e)){
        positionKey < 26 ? positionKey++ : positionKey = 0;
        const keyLetter = key[positionKey];
        const keyInd = this.abc.indexOf(e);
        const shift = this.abc.indexOf(keyLetter);
        let keyLetterInd = keyInd + shift;
        if(keyLetterInd > 25){
          keyLetterInd -= 26;
        }
        e = this.abc[keyLetterInd];
      }
      res.push(e);
    })

    if(!this.flag){
      res.reverse();
    }

    return res.join('');

  }    
  decrypt(message, key) {
    if(!arguments[0] || !arguments[1]) throw new Error();
    let increaseKey = this.increaseKeyLength(message, key);
    message = message.toUpperCase().split('');
    key = increaseKey.toUpperCase().split('');

    let res = [];
    let positionKey = -1;

    message.forEach(e => {
      if(this.abc.includes(e)){
        positionKey < 26 ? positionKey++ : positionKey = 0;
        const keyLetter = key[positionKey];
        const keyInd = this.abc.indexOf(e);
        const shift = this.abc.indexOf(keyLetter);
        let keyLetterInd = keyInd - shift;
        if(keyLetterInd < 0){
          keyLetterInd += 26;
        }
        e = this.abc[keyLetterInd];
      }
      res.push(e);
    })
    if(!this.flag){
      res.reverse();
    }
    return res.join('');
  }
}

module.exports = VigenereCipheringMachine;
