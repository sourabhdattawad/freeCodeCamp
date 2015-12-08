function palindrome(str) {
  // Good luck!
  str=str.toLowerCase().replace(/\s/g, '').replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var strspt= str.split("");
  var strrev=strspt.reverse();
  var j1= strrev.join("");
  if(j1===str){
    return true;
  }
  return false;
}



palindrome("A man, a plan, a canal. Panama");

