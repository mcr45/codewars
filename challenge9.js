/* sually when you buy something, 
you're asked whether your credit card number,
 phone number or answer to your most secret question is still correct. 
 However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify,
 which changes all but the last four characters into '#'. */

 // return masked string
function maskify(cc) {
    if(cc.length<5){return cc}
    let arrc=cc.split('')
    console.log(arrc)
    let htg=arrc.length - 4
    console.log(htg)
    let rp='#'.repeat(htg)
    let tg= arrc.map((x,i)=>{if(i>arrc.length-5) return x})
    
    return `${rp}${tg.join('')}`
    
  
  }
  