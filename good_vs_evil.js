// Good vs Evil

function goodVsEvil(good, evil){
  let win = false;
  goodSum = good.split(' ').reduce((i, j) => parseInt(i) + parseInt(j), 0);
  evilSum = evil.split(' ').reduce((i, j) => parseInt(i) + parseInt(j), 0);
  if (goodSum == evilSum) return 'Battle Result: No victor on this battle field';
  if(goodSum < evilSum) return 'Battle Result: Evil eradicates all trace of Good';
  return 'Battle Result: Good triumphs over Evil';
}
