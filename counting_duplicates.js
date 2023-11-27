// Counting Duplicates

function duplicateCount(text){
  let duplicates = [];
  let res = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if(duplicates[text.charAt(i)]) {
      duplicates[text.charAt(i)] += 1 
    } else {
      duplicates[text.charAt(i)] = 1;
    }
  }
  Object.values(duplicates).map(i => i > 1 ? res += 1 : '')
  return res;
}