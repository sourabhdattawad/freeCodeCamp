function findLongestWord(str) {
  str=str.split(" ");
  var list=[];
  for(var i=0;i<str.length;i++){
    list.push(str[i].length);
  }
  return Math.max.apply(Math, list);
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");

