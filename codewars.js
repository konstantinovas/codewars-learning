//You must implement a function that returns the difference between the largest and the smallest value in a given

function maxDiff(list) {
    if(list[0] == undefined) return 0
    let max = list[0];
    let min = list[0];
    list.map(n=>{
      if(n>max){max=n}
      else if (n<min){min = n}
    })
    return max - min;
  };

  //You are going to be given a word. 
  //Your job will be to make sure that each character in that word has the exact same number of occurrences. 
  //You will return true if it is valid, or false if it is not.

function validateWord(s)
{
  s=s.toLowerCase();
   let rez=false;
   let numberOfMatches = findStr(s,s[0]);
   for (let symbol of s ) {
     if(findStr(s, symbol) == numberOfMatches){
       rez=true;
     }
     else{
       rez=false;
       break;
         }
   }
  return rez
}
function findStr(str,symbol){
  let c=0;
  let position = 0;
  while(true){
    let findedPosition = str.indexOf(symbol, position);
    if (str.indexOf(symbol, position)>-1){
      c++;
      position = findedPosition + 1;
    }
    else{
      return c
    }
  }
}