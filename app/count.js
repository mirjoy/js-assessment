if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) { return _.range(start, end + 1, 1) },
    cancel: function() { return true}
  } 
});