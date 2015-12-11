function truncate(str, num) {
  // Clear out that junk in your trunk
 // return str.slice(0,num);
  
  if(num<=3){
    str=str.slice(0,num);
    str+='...';
    return str;
  }
  if(str.length<=num)
    return str;
  str = str.slice(0,(num-3));
  str+='...';
  return str;
}

truncate("Absolutely Longer", 2);

