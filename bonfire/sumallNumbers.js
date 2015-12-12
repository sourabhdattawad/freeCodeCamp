function sumAll(arr) {
  var getMax=Math.max.apply(Math, arr);
  var getMin=Math.min.apply(Math, arr);
  sum=0;
  for(var i=getMin;i<=getMax;i++){
    sum+=i;
  }
  return sum;
}

sumAll([1, 4]);

