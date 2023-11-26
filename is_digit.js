// Is digit

function isDigit(s) {
  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i).toLowerCase() != s.charAt(i).toUpperCase()) return false;
  }
  return true;
}