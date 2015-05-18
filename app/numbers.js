if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      newNum = parseInt(parseInt(num.toString(), bit));
      newNum = num.toString(2);
      return newNum;
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      newNum = num.toString(2);
      while (newNum.length != 8)
        { newNum = "0" + newNum }
       return newNum;
    },

    multiply: function(a, b) {
      return parseFloat((a * b).toPrecision(10).replace(/0+$/,''), 10);
    }
  };
});

