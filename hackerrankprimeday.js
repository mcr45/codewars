/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.  */

function diagonalDifference(arr) {
    // Write your code here
    /* console.log(arr) */
let arrflat=arr.flat()
//    console.log(arrflat)
let n = arr.length+1
let primd=0 
arrflat.forEach((x,i)=>{if((i+n)%n===0){primd= primd + x}})
let mind=0 
arr.reverse().flat().forEach((x,i)=>{if((i+n)%n===0){ mind=mind+x}})
console.log(primd + " ed anche " + mind)
/* for(let i=0;i<arrflat.length;i+4){
    primd=arrflat[i]+primd    
}
for(y=2;y<arrflat.length;y+2){
mind=mind + arrflat[y]

} */
return Math.abs(primd - mind)
}