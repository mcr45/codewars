/* given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function compo(a,b){
    return a.length-b.length
   }
   function findShort(s){
     let y=s.split(' ')
     y.sort(compo)
     console.log(y)
     return y[0].length
     }