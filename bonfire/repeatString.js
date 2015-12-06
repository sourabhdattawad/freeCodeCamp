function repeat(str, num) {
  // repeat after me
  if(num<0)
    return "";
  var getstr="";
  while(num){
    getstr+=str;
    num--;
  }
  return getstr;
}

repeat("abc", 3);

