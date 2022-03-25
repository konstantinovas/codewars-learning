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