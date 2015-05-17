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
      return //;
    },

    matchesPattern : function(str) {
      return //;
    },
    
    isUSD : function(str) {
      return /[^$]/;
    }
  };
});
