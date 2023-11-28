// Highest Scoring Word

function high(x){
  str = x.split(' ');
  let res = [];

  for(let i = 0; i < str.length; i++) {
    let tempStr = str[i];
    for(let j = 0; j < tempStr.length; j++) {
      let tempLetterMass = tempStr[j].charCodeAt(0) - 96;
      if(!res[tempStr]) {
        res[tempStr] = tempLetterMass;
      } else {
        res[tempStr] += tempLetterMass;
      }
    }
  }
  
  res = Object.entries(res).sort((a, b) => b[1] - a[1]);
  return res[0][0];
}