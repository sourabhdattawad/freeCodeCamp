function pair(str) {
  var bigArray=[];
  for(var i in str){
    var arr=[];
    if(str[i]==='A'){
      arr.push('A');
      arr.push('T');
      bigArray.push(arr);
    }
    else if(str[i]==='T'){
      
      arr.push('T');
      arr.push('A');
      bigArray.push(arr);
    }
    else if(str[i]==='G'){
      
      arr.push('G');
      arr.push('C');
      bigArray.push(arr);
    }
    else {
      
      arr.push('C');
      arr.push('G');
      bigArray.push(arr);
    }
  }
  return bigArray;
}

pair("ATCGA");

