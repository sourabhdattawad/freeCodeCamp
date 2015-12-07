function mutation(arr) {
  arr[0]=arr[0].replace(arr[0],arr[0].toLowerCase());
  arr[1]=arr[1].replace(arr[1],arr[1].toLowerCase());
  for(var i=0;i<arr[1].length;i++){
    var flag = arr[0].indexOf(arr[1][i],0);
    if(flag===-1){
      return false;
    
    }
  }
  return true;

}

mutation(["hello", "hey"]);

