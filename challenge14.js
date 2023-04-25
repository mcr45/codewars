/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true
XO("zzoo") => false */


function XO(str) {
  
    console.log(str)
    let x=0
    let o=0
    for(let i=0;i<str.length;i++){
      
      if(str[i].toLowerCase()=='x'){x=x+1}
     if(str[i].toLowerCase()=='o'){o=o+1}
      
    }
     return x===o
  }

