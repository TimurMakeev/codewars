// String transformer

function stringTransformer(str) {
  str = str.split(' ').reverse();
  for(let i = 0; i < str.length; i++) {
    let str1 = str[i];
    strTemp = '';
    
    for (let j = 0; j < str1.length; j++) {
      if (str1.charAt(j) == str1.charAt(j).toUpperCase()) {
        strTemp += str1.charAt(j).toLowerCase();
      } else {
        strTemp += str1.charAt(j).toUpperCase();
      }
    }
    
    str[i] = strTemp;
  }
  
  return str.join(' ');
}