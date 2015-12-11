function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
  return a - b;
});
   var count=0;
   for(var i=0;i< arr.length;i++){
    if(num>arr[i]){
      count+=1;
    }
    
  }
  return count;
  
}

where([10, 20, 30, 40, 50], 35);

