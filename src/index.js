
exports.min = function min (array) {
  a = Math.min.apply(null, array);
  if(a !== Infinity) return a;
  return 0;
}

exports.max = function max (array) {
  a = Math.max.apply(null, array);
  if(a !== -Infinity) return a;
  return 0;
}

exports.avg = function avg (array) {
  if(typeof(array) === 'undefined') return 0;
  if(array.length !== 0) {
    let sum = 0;
    for(i = 0; i < array.length; i++) {
      sum += array[i];
    }
    // console.log(sum / array.length);
    return sum / array.length;
  }
  return 0;
}
