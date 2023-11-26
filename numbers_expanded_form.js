// Write Number in Expanded Form

function expandedForm(num) {
  let j = num.toString().length;
  let res = [];
  for(let i = 0; i < num.toString().length; i++) {
    let tempDigit = num.toString().charAt(i);
    if(tempDigit == 0) {
      j--; 
      continue;
    }
    for(let z = 1; z < j; z++) {
      tempDigit += 0;
    }
    res.push(parseInt(tempDigit));
    j--;
  }
  return res.join(' + ');
}