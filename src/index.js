
exports.min = function min (array) {
    if (array == 'undefined') {
        return 0;
    }
    else {
     var min = array[0];
     for (var i = 1; i < array.length; i++) {
      if (array[i] < min) {
          min = array[i];
      }
        }
    }
  return min
}

exports.max = function max (array) {
    if (array == 'undefined') {
        return 0;
    }
 var max = array[0];
   for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
  }
  return max
}

exports.avg = function avg (array) {
    if (array == 'undefined') {
        return 0;
    }
  var l = array.length;
  var sum = array[0];
  for (var i = 1; i < array.length; i++) {
      sum = sum + array[i];
  }
  var a=sum/l;
return a;
}

