// Split Strings

function solution(str){
  let res = [];
   for(let i = 0; i < str.length; i = i + 2) {
     let tempStr = str.slice(i, i + 2);
     if(tempStr.length < 2) {
       let tempStrFixed = '';
       for(let j = 0; j < 2; j++) {
          if(tempStr.charAt(j)) {
            tempStrFixed += tempStr.charAt(j);
          } else {
            tempStrFixed += '_';
          }
       }
       tempStr = tempStrFixed;
     }
     res.push(tempStr);
   }  
    return res;
}