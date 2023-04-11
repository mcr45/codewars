/* This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

function accum(s) {
    console.log(s)
    let arrs=s.toLowerCase().split('')
    let n=arrs.map((a,b)=>{if(b<1){return a.toUpperCase()+'-'} 
      else{
      return a.toUpperCase()+a.repeat(b)+'-'}})
  let z=n[n.length-1].replace('-','')
   n.pop()
    n.push(z)
    return n.join('')
      
  }