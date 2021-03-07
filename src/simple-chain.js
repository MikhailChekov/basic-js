const CustomError = require("../extensions/custom-error");

let chain = [];

const chainMaker = {

  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (!arguments.length) {
      value = '( )';
    }
    value = String(value);
    chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 0) {
      chain = [];
      throw new Error();
    }
    position = position - 1;
    chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    const completedChain = chain.join('~~');
    chain = [];
    return completedChain;
  }
};


module.exports = chainMaker;
