function diff(arr1, arr2) {
  var array3 = arr1.filter(function(obj) { return arr2.indexOf(obj) == -1; });
  var array4 = arr2.filter(function(obj) { return arr1.indexOf(obj) == -1; });
  return array3.concat(array4);

}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

