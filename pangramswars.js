/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string){
    //...
    console.log(string)
    let arrs=string.replaceAll(/[0-9]/g, '').replaceAll(/[^a-zA-Z ]/g, "").replaceAll(' ', '').toLowerCase().split('')
    console.log(arrs)
    //
    let objst={}
    arrs.forEach((i)=>{
      objst[`${i}`]='Im here'
    })
    console.log(objst)
    console.log(Object.keys(objst).length)
    if(Object.keys(objst).length===26){return true}
    else{return false}
    
    
  }