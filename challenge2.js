/* our task is to make a function that can take any non-negative integer as
 an argument and return it with its digits in descending order.
 Essentially, rearrange the digits to create the highest possible number. */








function descendingOrder(n){
  
    let strn = n.toString().split('')
    strn.sort((a,b)=>{return a-b})
    let arrn=strn.reverse().join('')
    return Number(arrn)
    
  
  }