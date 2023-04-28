/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */


function arrayDiff(a, b) {
    let dif={a:0}
    let c
    let d=[]
    for(let i=0;i<b.length;i++){
      c=b[i].toString()
    dif[`${c}`]='no'
  }
    for(let z=0;z<a.length;z++){
      if(a[z] in dif){console.log(a[z])}
      else{ d.push(a[z])}
      }
  return d  
  
   }
