/* Your task is to sort a given string. Each word in the string will contain a single number.
 This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
 The words in the input String will only contain valid consecutive numbers. */

 function order(words){
    if(!words){return ''} 
      let arw=words.split(' ')
      console.log(arw)
      let rtn=[]
      let dict={'0':'acqua',
               '1':'fuoco',
                '2':'ghiaccio',
                '3':'',
                '4':' ',
                '5':'p',
                '6':90,
                '7':78,
                '8':7,
                '9':0 
               }
      for(let i=0;i<arw.length;i++){
        let tmp=arw[i].split('')
      //  console.log(tmp)
       for(let y=0;y<tmp.length;y++){
          if(tmp[y] in dict){rtn[tmp[y]]=tmp}
        }
        
      }
      rtn.shift()
      console.log(rtn)
      let anotherone=[]
      for(let z=0;z<rtn.length;z++){
        
        anotherone[z]=rtn[z].join('')
      }
      console.log(anotherone)
      return anotherone.join(' ')
      // ...
    }
