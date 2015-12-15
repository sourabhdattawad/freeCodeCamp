function convert(num) {

  var result = '';
  var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (var x = 0; x < rom.length; x++) {
    while (num >= ara[x]) {
      result += rom[x];
      num -= ara[x];
    }
  }
  return result;
}

convert(36);

