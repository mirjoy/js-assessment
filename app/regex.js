if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /\d/;
    },

    containsRepeatingLetter : function(str) {
      return /\B/;
    },

    endsWithVowel : function(str) {
      return /[aeiou]/;
    },

    captureThreeNumbers : function(str) {      
      var matches = /\d{3}/.exec(str);
      return matches ? matches[0] : false;
    },

    matchesPattern : function(str) {
      return /\d{3}[-]\d{3}[-]\d{4}/;
    },
    
    isUSD : function(str) {
      return /[^$]/;
    }
  };
});
