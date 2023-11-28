// Moving Zeros To The End

function moveZeros(arr) {
  let arrLength = arr.length;
  for(let i = 0; i < arrLength; i++) {
    if(arr[i] === 0) {
      let zero = arr.slice(i, i + 1); 
      let firstArrEl = arr.slice(0, i); 
      let lastArrEl = arr.slice(i + 1, arr.length);
      arr = [...firstArrEl, ...lastArrEl, ...zero]
      i = 0;
      arrLength--;
    } 
  }
  return arr;
}