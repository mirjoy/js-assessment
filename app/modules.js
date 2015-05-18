if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	var module = function(){
    		return {
    			exports.greeting: function() { return str1 }, 
    			exports.name: function() { return str2 },
    			exports.sayIt: function(str1, str2){
    				return str1 + ", " + str2;
    			}
    		}
    	}
    }
  };
});

