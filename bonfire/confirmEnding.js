function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.split(" ");
  var revstr = str[str.length-1].split("").reverse();
  var flag=1;
  var targetrev=target.split("").reverse();
  for(var i=0;i<target.length;i++){
    if(revstr[i]!==targetrev[i])
      flag=0;
  }
   if(flag===1)
     return true;
  return false;
}

end("Bastian", "n");

