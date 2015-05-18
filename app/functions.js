if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        obj['sayIt'] = fn;
        return obj.sayIt;
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
        return function(moreStuff) {
            return fn(str1, str2) + moreStuff;
        }
    },

    useArguments : function() {
        return _.reduce(arguments, function(arguments, num) {
            return arguments + num;
        }, 0)
    },

    callIt : function(fn) {
        return fn;
    },

    partialUsingArguments : function(fn) {
        _.each(args, function(arg){
            if (typeof arg === undefined){
                return function(arg) {
                    return fn;
                }
            }
            return fn;
        });
    },

    curryIt : function(fn) {

    }
  };
});
