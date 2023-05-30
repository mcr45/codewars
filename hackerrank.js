/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.
 */

function solution(){

let pos=0
    let neg=0
    let zer=0
    arr.forEach((i)=>{
        if(i===0){return zer=zer+1}
        else if(i>0){return pos = pos+1}
        else{return neg = neg+ 1}
    })
    let posratio=(pos/arr.length).toFixed(6)
    let zerratio=(zer/arr.length).toFixed(6)
    let negatratio=(neg/arr.length).toFixed(6)
    console.log(posratio)
    console.log(negatratio)
     console.log(zerratio)
}