if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return _.reduce(arr, function(memo, num) { return memo + num; }, 0);
    },

    remove : function(arr, item) {
        return _.reject(arr, function(num){ return num == item });
    },

    removeWithoutCopy : function(arr, item) {
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var itemCount = 0;
        _.each(arr, function(arrayItem){ 
            if (arrayItem === item){
                itemCount++;
            }
         });
         return itemCount;        
    },

    duplicates : function(arr) {
        var numCount = {}
        var dupes = []

        _.each(arr, function(arrNum){
          if (numCount[arrNum] == 1)
            { dupes.push(arrNum) }
          else
            numCount[arrNum] = 1
        });

        return _.uniq(dupes);
    },

    square : function(arr) {
       return _.map(arr, function(arrNum){
            return arrNum * arrNum;
        })
    },

    findAllOccurrences : function(arr, target) {
        allOccurrences = []

        _.each(arr, function(letter){
     
          if (letter === target)
            { allOccurrences.push(arr.indexOf(letter)) }
        });
        
        return allOccurrences;
    }
  };
});
