/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

function reverseWords(str) {
    // Go for it
    let ars=str.split(' ')
    //console.log(ars)
    let res=[]
    ars.forEach((i)=>{
      let x=i.split('').reverse().join('')
      res.push(x)
      
    })
    console.log(res.join(' '))
    return res.join(' ')
    
    
  }

