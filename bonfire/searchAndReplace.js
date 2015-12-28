function myReplace(str, before, after) {
  var val=before[0].charCodeAt(0);
  if(val>=65 && val<=90)
  {
    
    a= after[0].toUpperCase();
    after =after.replace(after[0],a);

  }
  return str.replace(before, after);
}

myReplace("Let us get back to more Coding", "Coding", "bonfires");

