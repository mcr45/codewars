/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
 Spaces will be included only when more than one word is present. */


 function spinWords(string){
    let mstr= string.split(' ')
    let spc= (mstr.length>1)?  ' ' : ''
    let mymstr=[]
    let ret=''
    for(let i=0;i<mstr.length;i++){
  if(mstr[i].length>4){
    mymstr[i]=mstr[i].split('').reverse().join('')
  }
    else {mymstr[i]=mstr[i]}
    }
    console.log('o')
    for(let y=0;y<mymstr.length;y++){
      ret=ret+mymstr[y]+spc  
    }
    return ret.trimEnd()
  }