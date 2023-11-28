// Generate hashtag

function generateHashtag (str) {
  str = str.split(' ');
  str = str.filter(function(e){return e})
  
  if(str.length == 0) return false;
  
  for(let i = 0; i < str.length; i++) {
    if(str[i].length > 139) return false;
    if(str[i].charAt(0) == '#') return false;
    if(str[i].charAt(0) != str[i].charAt(0).toUpperCase()) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  return '#' + str.join('');
}