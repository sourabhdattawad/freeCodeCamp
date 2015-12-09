function largestOfFour(arr) {
  var list =[];
  for(var i = 0;i<arr.length;i++){
    list.push(Math.max.apply(Math, arr[i]));
  }
  // You can do this!
  return list;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

