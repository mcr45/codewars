/* Given an array of integers, where all elements but one occur twice, find the unique element. */


function lonelyinteger(a) {
    // Write your code here
let cop=a.slice()
let poso=0
for(let i=0;i<a.length;i++){
    cop.shift()
    if(cop.includes(a[i])===false){poso=a[i]}
    else{cop.push(a[i])}
}
return poso
}