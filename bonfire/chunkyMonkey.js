function chunk(arr, size) {
  // Break it up
  var bigarr=[];
  var flag=0;
  while(arr.length>=size){
    
  bigarr.push(arr.splice(0,size));
 
    if(arr.length===0){
      flag=1;
    }
  }
 
  if(flag===1){
    return bigarr;
  }
  bigarr.push(arr.splice(0,arr.length));
  return bigarr;
}

chunk([0, 1, 2, 3, 4, 5], 4);

