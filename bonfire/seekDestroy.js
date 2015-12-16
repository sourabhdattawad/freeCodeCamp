function destroyer(arr) {
  
 var val=[];
  for(var i=1;i<arguments.length;i++){
    val.push(arguments[i]);
  }

    function rem(value){
      
      for(var j=0;j<val.length;j++){
        if(val[j]===value)
          return false;
      }
      return true;
    }  
  
  return arr.filter(rem);
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

