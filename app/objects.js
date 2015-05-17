if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
	  obj.newFunction = fn;

      return obj.newFunction(obj);
    },

    alterObjects : function(object, newVariable) {
      object.prototype['greeting'] = newVariable;
    },

    iterate : function(obj) {
      var props = [];
      
      for (var prop in obj){
        props.push(prop + ": " + obj[prop])
      }

      return props;
    }
  };
});
