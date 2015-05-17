if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {

      return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {

    },

    functionFunction : function(str) {
        return function(str2){ return str + ", " + str2; }
    },

    makeClosures : function(arr, fn) {
      return _.map(arr, function(eachNum){
        return function(){ return fn(eachNum); }
      })
    },

    partial : function(fn, str1, str2) {
        return fn(str1, str2)  + arguments;
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {
    },

    curryIt : function(fn) {

    }
  };
});
