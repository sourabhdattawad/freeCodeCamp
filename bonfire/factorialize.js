function factorialize(num) {
  var temp=1;
  while(num>=1){
    temp*=num;
    num-=1;
  }
  return temp;
}

factorialize(5);

