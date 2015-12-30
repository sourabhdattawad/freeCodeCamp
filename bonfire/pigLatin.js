function translate(str) {  
  
  if(str[0]==='a'||str[0]==='e'||str[0]==='i'||str[0]==='o'||str[0]==='u'){
    return str+"way";
  }
  var sstr=str;
  str = str.split('');
  var i=0;
  var val='';
  
    while(str[i]!='a' &&  str[i]!='e' && str[i]!='i' && str[i]!='o' && str[i]!='u'){
      val+=str[i];
      i+=1;
    }
  
   sstr = sstr.replace(val,"");
   return sstr+val+"ay";
}

translate("glove");

